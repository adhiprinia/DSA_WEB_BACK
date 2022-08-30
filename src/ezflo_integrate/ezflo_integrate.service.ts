import { HttpException, Injectable, InternalServerErrorException, Sse } from '@nestjs/common';
import axios from 'axios';
import { CreateEzfloIntegrateDto, EzfloQueryStatus } from './dto/create-ezflo_integrate.dto';
import { UpdateEzfloIntegrateDto } from './dto/update-ezflo_integrate.dto';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressDetail } from 'src/address_detail/entities/address_detail.entity';
import { BankDetail } from 'src/bank_detail/entities/bank_detail.entity';
import { ReferenceDetail } from 'src/reference_detail/entities/reference_detail.entity';
import { CONFIG } from 'src/config/config';
import { addressType, referenceType, SuccessResponse, sumbitApplication } from './dto/submit_application.dto';
import { DashBoardDto } from './dto/DashBoard.dto';

@Injectable()
export class EzfloIntegrateService {
  constructor(@InjectRepository(FactDsaApplicantDetail) private factDsaApplicantDetailRepository: Repository<FactDsaApplicantDetail>,
    @InjectRepository(AddressDetail) private addressDetailRepository: Repository<AddressDetail>,
    @InjectRepository(BankDetail) private bankDetailRepository: Repository<BankDetail>,
    @InjectRepository(ReferenceDetail) private referenceDetailRepository: Repository<ReferenceDetail>) { }
  async ezfloCheckQuery(ezfloQueryStatus: EzfloQueryStatus) {
    try {
      // let check_applicant_id = await this.factDsaApplicantDetailRepository.findOne({where:{ applicantId : ezfloQueryStatus.applicantId}})
      let ezflo_integrate_check_query = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/ezfloApplicationStatus`,{ ApplicationID:ezfloQueryStatus.ApplicationID})
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: ezflo_integrate_check_query.data
      };
      return response;
    }
    catch (error) {
      console.log(error.response.data)
    }
  }

  async ezfloPullQueryStatus(ezfloQueryStatus: EzfloQueryStatus) {
    
    if (!ezfloQueryStatus.ApplicationID){
      throw new HttpException("please provide DSA APPLICATION ID",404);
    }
    try {
      console.log(ezfloQueryStatus);
      let ezflo_integrate_pull_query = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/ezfloPullOpenQueries`, ezfloQueryStatus,{ headers: { 
        'Content-Type': 'application/json'
      }});
      console.log(ezflo_integrate_pull_query,"llllll")
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: ezflo_integrate_pull_query.data
      };
      console.log(response);
      return response;
    } catch (error) {
      // error = error?.response?.data || error;
      if(error){
        console.error(error);
        // throw new HttpException(JSON.stringify(error.response),404);
        return error.response.data;
      }
      else throw new InternalServerErrorException(error.message);
    }
  }

  async ezfloUpdateQueryStatus(ezfloQueryStatus) {
    try {
      let ezflo_integrate_update_query = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/ezfloUpdateCaseQuery`, ezfloQueryStatus)
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: ezflo_integrate_update_query.data
      };
      // console.log("[//",ezflo_integrate_update_query.data,"[//");
      return response;
    } catch (error) {
      console.log(error)
      return error.response.data;
    }
  }

  async ezfloSubmitQueryStatus(ezfloQueryStatus: EzfloQueryStatus) {
    console.log(ezfloQueryStatus.dsaApplicantId,'dsaAppplicationID');
      if (!ezfloQueryStatus.dsaApplicantId){
        throw new HttpException("please provide DSA APPLICATION ID",404);
      }
      try {
      let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: ezfloQueryStatus.dsaApplicantId } })
      // console.log(fact_dsa_applicant_detail)

      let address_details = await this.addressDetailRepository.find({ where: { dsaApplicantId: ezfloQueryStatus.dsaApplicantId } })
      // console.log(address_detail)

      let bank_detail = await this.bankDetailRepository.findOne({ where: { dsaApplicantId: ezfloQueryStatus.dsaApplicantId } })
      // console.log(bank_detail)

      let reference_details = await this.referenceDetailRepository.find({ where: { dsaApplicantId: ezfloQueryStatus.dsaApplicantId } })
      // console.log(reference_detail)

      // let addresses: addressType[] = [];
      /// mapping addresses
    
      const addresses: addressType[] = address_details.map(address_detail => ({
        addressType: address_detail.addressType,
        addressL1: address_detail.addressLine1,
        addressL2: address_detail.addressLine2,
        landmark: address_detail.landMark,
        pincode: address_detail.pinCode,
        area: address_detail.area,
        postOffice: "",
        city: address_detail.city,
        district: address_detail.district,
        state: address_detail.state,
        country: address_detail.country,
        residenceType: address_detail.residentType
      }));
      // addresses.push(mappedAddress);
      ///

      // mapping refererenced
      // let references: referenceType[] = [];

      const references: referenceType[] = reference_details.map( reference_detail => ({
        name: reference_detail.name,
        mobileNo: reference_detail.mobileNo,
        companyEmail: '',
      }));
      // references.push(mappedReference);
      /// 

      /// mapping relations
        /// not now for demo
      ///


      let mybody: sumbitApplication = {
        "DSAOrReferral": fact_dsa_applicant_detail.partnerType,
        "MobileNo": fact_dsa_applicant_detail.mobileNumber,
        "EmailID": fact_dsa_applicant_detail.emailId,
        "PANNumber": fact_dsa_applicant_detail.panCard,
        "CKYCNo": fact_dsa_applicant_detail.ckycNumber,
        "aadharNo": fact_dsa_applicant_detail.aadhaarCard,
        "addresses": addresses,
        "salutation": fact_dsa_applicant_detail.salutation,
        "name": fact_dsa_applicant_detail.fullName,
        "photo": "DMSID",
        "DOB": fact_dsa_applicant_detail.dateOfBirth.toDateString(),
        "fatherName": fact_dsa_applicant_detail.fathersName,
        "gender": fact_dsa_applicant_detail.gender,
        "accountHolderName": bank_detail.accountHolder,
        "typeOfAccoont": bank_detail.accountType,
        "bankAccountNo": bank_detail.accountNumber,
        "IFSCCode": bank_detail.ifscCode,
        "bankName": bank_detail.bankName,
        "branchName": bank_detail.branchName,
        "bankphoneNo": "",
        "reference": references,
        "relationships": [
          /// not defined yet
        ],
        "ApplicantDetails": [
        ],
        "documents": [
          /* not now for demo */
        ],
        "CIBIL": {
          "timestamp": "2022-03-22 04:00:00",
          "score": 150
        },
        "dateOfIncorporation": "",
        "partnerType": fact_dsa_applicant_detail.partnerType,
        "constitutionType": fact_dsa_applicant_detail.constitutionType,
        "GSTApplicableSection": fact_dsa_applicant_detail.gstApplicable,
        "GSTNumber": fact_dsa_applicant_detail.gstNumberVerify,
        "MSMERegistrationApplicable": fact_dsa_applicant_detail.msmeApplicable,
        "MSMENo": fact_dsa_applicant_detail.msmeNumberVerify,
        "TRINNoApplicable": fact_dsa_applicant_detail.trinApplicable,
        "TRINNo": fact_dsa_applicant_detail.trinNumberVerify,
        "legalDispute": fact_dsa_applicant_detail.legalDispute,
        "legalDescription": "legal Description ",
        "DSANumber": "",
        "DMSReferenceNumber": fact_dsa_applicant_detail.dsaApplicantId,
        "RMCode": "353",
        "ZMCode": "354"
      }
      //
      // console.log("\n//////]\n",JSON.stringify(mybody,null,3),"\n//////]\n");
      //
      console.log(ezfloQueryStatus.dsaApplicantId,"ezfloQueryStatus.dsaApplicantId");

      let ezflo_integrate_submit_query = await axios.post<SuccessResponse>(`${CONFIG.EZFLO_BACKEND_HOST}/ezfloSubmit`, mybody)

      console.log(JSON.stringify(mybody,null,3));
      /*
        neeed to check the below line if response changes
      */
      let applicant_id = ezflo_integrate_submit_query.data["Application_No"];
      console.log(applicant_id)
      let fact_dsa_applicant_detail_save = await this.factDsaApplicantDetailRepository
      .createQueryBuilder()
      .update(FactDsaApplicantDetail)
      .where({dsaApplicantId:ezfloQueryStatus.dsaApplicantId})
      .set({
          applicantId:applicant_id
        })
      .execute()

      console.log("applicant_id",applicant_id);
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: ezflo_integrate_submit_query.data
      };
      return response;
    } catch (error) {
      console.log(error);
      console.log(JSON.stringify(error,null,3));
      return error?.response?.data;
    }
  }

  async getDashboard(dashBoardDto : DashBoardDto){
    if (!dashBoardDto.ApplicationID){
      throw new HttpException("please provide ApplicationID",404);
    }
      try {
        let ezflo_integrate_pull_query = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/ezfloPullOpenQueries`, dashBoardDto ,{ headers: { 
          'Content-Type': 'application/json'
        }});
        let applicationDetails = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/ezfloApplicationStatus`, {ApplicationID:dashBoardDto.ApplicationID},{ headers: { 
          'Content-Type': 'application/json'
        }});
        const body = {...ezflo_integrate_pull_query.data, ...applicationDetails.data};
        console.log(ezflo_integrate_pull_query.data,applicationDetails.data);
        console.log(body);
        return body;
    }
    catch(err){
      console.log(err);
      return err.response.data;
    }
  }
}
