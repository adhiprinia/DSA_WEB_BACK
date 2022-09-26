import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { AddressDetail } from 'src/address_detail/entities/address_detail.entity';
import { ApplicationStatus } from 'src/application_status/entities/application_status.entity';
import { BankDetail } from 'src/bank_detail/entities/bank_detail.entity';
import { CONFIG } from 'src/config/config';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from 'src/config/response';
import { DirectorDetail } from 'src/director_detail/entities/director_detail.entity';
import { DocumentUpload } from 'src/document_upload/entities/document_upload.entity';
import { baseUrl } from 'src/localUrl/Url';
import { ProgressBar } from 'src/progress_bar/entities/progress_bar.entity';
import { ReferenceDetail } from 'src/reference_detail/entities/reference_detail.entity';
import { ResourceInfo } from 'src/resource_info/entities/resource_info.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateFactDsaApplicantDetailDto } from './dto/create-fact_dsa_applicant_detail.dto';
import { CreatePhoneOtpDto, CreateOtpVerifyDto, CreateGmailOtpDto, ForgotPasswordVerifyDto, CreateGmailotpVerifyDto, CreateAadhaarXmlDto, CreateAadhaarOtpDto, CreatePancardDto } from './dto/otp_send_verify_dtp';
import { UpdateFactDsaApplicantDetailDto } from './dto/update-fact_dsa_applicant_detail.dto';
import { FactDsaApplicantDetail } from './entities/fact_dsa_applicant_detail.entity';

@Injectable()
export class FactDsaApplicantDetailService {
  constructor(@InjectRepository(FactDsaApplicantDetail) private factDsaApplicantDetailRepository: Repository<FactDsaApplicantDetail>,
    @InjectRepository(AddressDetail) private addressDetailRepository: Repository<AddressDetail>,
    @InjectRepository(BankDetail) private bankDetailRepository: Repository<BankDetail>,
    @InjectRepository(DocumentUpload) private documentUploadRepository: Repository<DocumentUpload>,
    @InjectRepository(ResourceInfo) private resourceInfoRepository: Repository<ResourceInfo>,
    @InjectRepository(ApplicationStatus) private applicationStatusRepository: Repository<ApplicationStatus>,) { }



  async create(createFactDsaApplicantDetailDto: CreateFactDsaApplicantDetailDto): Promise<ApiResponse<FactDsaApplicantDetail>> {
    try {
      let fact_dsa_applicant_detail = new FactDsaApplicantDetail()
      let mobile_number_exist = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: createFactDsaApplicantDetailDto.mobileNumber, factDsaApplicantDetailisActive: true } });
      if (mobile_number_exist) {
        let response: ApiResponse<FactDsaApplicantDetail> = {
          status: ApiResponseStatus.ERROR,
          error: {
            type: ErrorMessageType.ERROR,
            message: `This number already exists`,
          }
        };
        return response;
        // throw new HttpException('this phone number is already exist', 404);      
      }
      fact_dsa_applicant_detail.fullName = createFactDsaApplicantDetailDto.fullName,
        fact_dsa_applicant_detail.userId = createFactDsaApplicantDetailDto.userId,
        fact_dsa_applicant_detail.mobileNumber = createFactDsaApplicantDetailDto.mobileNumber,
        fact_dsa_applicant_detail.mobileNumberOtpVerify = createFactDsaApplicantDetailDto.mobileNumberOtpVerify,
        fact_dsa_applicant_detail.emailId = createFactDsaApplicantDetailDto.emailId,
        fact_dsa_applicant_detail.emailIdOtp = createFactDsaApplicantDetailDto.emailIdOtp,
        fact_dsa_applicant_detail.emailIdOtpVerify = createFactDsaApplicantDetailDto.emailIdOtpVerify,
        fact_dsa_applicant_detail.partnerType = createFactDsaApplicantDetailDto.partnerType,
        fact_dsa_applicant_detail.branch = createFactDsaApplicantDetailDto.branch,
        fact_dsa_applicant_detail.pincode = createFactDsaApplicantDetailDto.pincode,
        fact_dsa_applicant_detail.constitutionType = createFactDsaApplicantDetailDto.constitutionType,
        fact_dsa_applicant_detail.factDsaApplicantDetailEntdBy = createFactDsaApplicantDetailDto.factDsaApplicantDetailEntdBy,
        fact_dsa_applicant_detail.factDsaApplicantDetailEntdOn = createFactDsaApplicantDetailDto.factDsaApplicantDetailEntdOn
      // console.log(fact_dsa_applicant_detail,"data collected");
      let saved_fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.save(fact_dsa_applicant_detail)
      // console.log(saved_fact_dsa_applicant_detail,"data inserted");
      for (let i = 1; i < 4; i++) {
        let address_detail = new AddressDetail()
        address_detail.dsaApplicantId = fact_dsa_applicant_detail.dsaApplicantId
        address_detail.addressType = i.toString()
        let saved_address_detail = await this.addressDetailRepository.save(address_detail)
      }
      ///bank detail 
      let bank_detail = new BankDetail()
      bank_detail.dsaApplicantId = fact_dsa_applicant_detail.dsaApplicantId
      let saved_bank_detail = await this.bankDetailRepository.save(bank_detail)

      //application status
      let application_status = new ApplicationStatus();
      application_status.dsaApplicantId = fact_dsa_applicant_detail.dsaApplicantId;
      let saved_progress_bar = await this.applicationStatusRepository.save(application_status);

      let response: ApiResponse<FactDsaApplicantDetail> = {
        status: ApiResponseStatus.SUCCESS,
        data: saved_fact_dsa_applicant_detail
      };

      return response;
    } catch (error) {
      throw error
    }
  }

  async update(updateFactDsaApplicantDetailDto: UpdateFactDsaApplicantDetailDto) {
    let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository
      .createQueryBuilder()
      .update(FactDsaApplicantDetail)
      .where({ dsaApplicantId: updateFactDsaApplicantDetailDto.dsaApplicantId })
      .set(
        {

          ///basic detail
          fullName: updateFactDsaApplicantDetailDto.fullName,
          mobileNumberOtpVerify: updateFactDsaApplicantDetailDto.mobileNumberOtpVerify,
          emailId: updateFactDsaApplicantDetailDto.emailId,
          emailIdOtp: updateFactDsaApplicantDetailDto.emailIdOtp,
          emailIdOtpVerify: updateFactDsaApplicantDetailDto.emailIdOtpVerify,
          partnerType: updateFactDsaApplicantDetailDto.partnerType,
          branch: updateFactDsaApplicantDetailDto.branch,
          pincode: updateFactDsaApplicantDetailDto.pincode,
          constitutionType: updateFactDsaApplicantDetailDto.constitutionType,
          applicantId: updateFactDsaApplicantDetailDto.applicantId,
          gstenteron: updateFactDsaApplicantDetailDto.gstenteron,
          msmeenteron: updateFactDsaApplicantDetailDto.msmeenteron,
          trinenteron: updateFactDsaApplicantDetailDto.trinenteron,

          ///kyc details update
          panCard: updateFactDsaApplicantDetailDto.panCard,
          aadhaarCard: updateFactDsaApplicantDetailDto.aadhaarCard,
          ckycNumber: updateFactDsaApplicantDetailDto.ckycNumber,
          gstApplicable: updateFactDsaApplicantDetailDto.gstApplicable,
          gstNumberVerify: updateFactDsaApplicantDetailDto.gstNumberVerify,
          trinApplicable: updateFactDsaApplicantDetailDto.trinApplicable,
          trinNumberVerify: updateFactDsaApplicantDetailDto.trinNumberVerify,
          msmeApplicable: updateFactDsaApplicantDetailDto.msmeApplicable,
          msmeNumberVerify: updateFactDsaApplicantDetailDto.msmeNumberVerify,
          legalDispute: updateFactDsaApplicantDetailDto.legalDispute,
          applicantPhoto: updateFactDsaApplicantDetailDto.applicantPhoto,
          takePhoto: updateFactDsaApplicantDetailDto.takePhoto,
          ///personal detail updaye
          salutation: updateFactDsaApplicantDetailDto.salutation,
          fathersName: updateFactDsaApplicantDetailDto.fathersName,
          mothersName: updateFactDsaApplicantDetailDto.mothersName,
          dateOfBirth: updateFactDsaApplicantDetailDto.dateOfBirth,
          gender: updateFactDsaApplicantDetailDto.gender,
          highestQualification: updateFactDsaApplicantDetailDto.highestQualification,
          profession: updateFactDsaApplicantDetailDto.profession,
          dateOfIncorporation: updateFactDsaApplicantDetailDto.dateOfIncorporation,
          // mobileNumber: updateFactDsaApplicantDetailDto.mobileNumber,
          // mobileNumberOtp:updateFactDsaApplicantDetailDto.mobileNumberOtp,
          authoriseABHFL: updateFactDsaApplicantDetailDto.authoriseABHFL,
          cibilScore: updateFactDsaApplicantDetailDto.cibilScore,
          cibilDateAndTime: updateFactDsaApplicantDetailDto.cibilDateAndTime,

        }
      )
      .execute();
    // console.log(fact_dsa_applicant_detail);
    if (fact_dsa_applicant_detail.affected === 0) {
      return new HttpException('zero row affected', 404)
    } else {
      let response = {
        status: ApiResponseStatus.SUCCESS,
        data: fact_dsa_applicant_detail
      };
      return response;
    }
  }

  async findAll(): Promise<ApiResponse<FactDsaApplicantDetail[]>> {
    let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.find()
    let responsData = [];
    responsData.push({
      "fact_dsa_applicant_detail": fact_dsa_applicant_detail,
      "totalCount": fact_dsa_applicant_detail.length,
    });
    let response: ApiResponse<FactDsaApplicantDetail[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }
  async findAllApplications(){

    let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository
      .createQueryBuilder()
      .where('applicant_id is not null')
      .getCount()
    let responsData = [];
    responsData.push({
      "fact_dsa_applicant_detail": fact_dsa_applicant_detail,
      // "totalCount": fact_dsa_applicant_detail.length,
    });
    let response: ApiResponse<FactDsaApplicantDetail[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findOne(dsaApplicantId: string): Promise<ApiResponse<FactDsaApplicantDetail>> {
    // console.log(dsaApplicantId)
    let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: dsaApplicantId } })
    let response: ApiResponse<FactDsaApplicantDetail>;
    if (fact_dsa_applicant_detail) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: fact_dsa_applicant_detail
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }

  async login(mobileNumber: string) {
    let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: mobileNumber, factDsaApplicantDetailisActive: true } })
    let response: ApiResponse<FactDsaApplicantDetail>;
    if (fact_dsa_applicant_detail) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: fact_dsa_applicant_detail
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }

  async dsaSendPhoneOtp(createPhoneOtpDto: CreatePhoneOtpDto) {
    try {
      if (!createPhoneOtpDto.phoneno && createPhoneOtpDto.phoneno.length !== 10) throw new HttpException('noPhoneNumber', 404);
      let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: createPhoneOtpDto.phoneno } })
      let response: ApiResponse<FactDsaApplicantDetail>;
      if (fact_dsa_applicant_detail.mobileNumber) {
        let phone_otp_generate = CONFIG.VERIFY_BACKEND_HOST_PHONE_GEN_OTP
        // //
        // console.log({phoneno:createPhoneOtpDto.phoneno},"from body");
        // //
        let send_phone_otp = await axios.post(phone_otp_generate, { phoneno: createPhoneOtpDto.phoneno })
        response = {
          status: ApiResponseStatus.SUCCESS,
          data: send_phone_otp.data
        }
      } else {
        response = {
          status: ApiResponseStatus.ERROR
        }
      }
      return response;
    } catch (error) {
      if (error.message === 'noPhoneNumber') throw error;
      // console.log(error)
      throw new HttpException("phone number is not exist", 404);
    }
  }

  async dsaVerifyPhoneOtp(createOtpVerifyDto: CreateOtpVerifyDto) {
    try {
      let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: createOtpVerifyDto.phoneno } })
      if (fact_dsa_applicant_detail.mobileNumber) {
        let phone_otp_verify = CONFIG.VERIFY_BACKEND_HOST_PHONE_VERIFY_OTP
        let send_phone_otp = await axios.post(phone_otp_verify, { phoneno: createOtpVerifyDto.phoneno, otp: createOtpVerifyDto.otp })
        if (send_phone_otp.data.result === "Success") {
          let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: createOtpVerifyDto.phoneno } });
          let fact_dsa_applicant_detail_data = { ...fact_dsa_applicant_detail, ...createOtpVerifyDto };
          fact_dsa_applicant_detail_data.mobileNumberOtpVerify = "true"
          let updated_transaction = await this.factDsaApplicantDetailRepository.save(fact_dsa_applicant_detail_data);
          let response: ApiResponse<FactDsaApplicantDetail> = {
            status: ApiResponseStatus.SUCCESS,
            data: send_phone_otp.data
          };
          return response;
        }
        else {
          let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: createOtpVerifyDto.phoneno } });
          let fact_dsa_applicant_detail_data = { ...fact_dsa_applicant_detail, ...createOtpVerifyDto };
          fact_dsa_applicant_detail_data.mobileNumberOtpVerify = "false"
          let updated_transaction = await this.factDsaApplicantDetailRepository.save(fact_dsa_applicant_detail_data);
          let response: ApiResponse<FactDsaApplicantDetail> = {
            status: ApiResponseStatus.ERROR,
            data: send_phone_otp.data
          };
          return response;
        }
      }
    } catch (error) {
      // console.log(error)
      throw new HttpException("phone number otp is not valid", 404);
    }
  }

  async dsaSendGmailOtp(createGmailOtpDto: CreateGmailOtpDto) {
    try {
      let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { emailId: createGmailOtpDto.email } })
      let response: ApiResponse<FactDsaApplicantDetail>;
      if (fact_dsa_applicant_detail.emailId) {
        let email_otp_generate = CONFIG.VERIFY_BACKEND_HOST_GMAIL_OTP

        let send_email_otp = await axios.post(email_otp_generate, { email: createGmailOtpDto.email })
        response = {
          status: ApiResponseStatus.SUCCESS,
          data: send_email_otp.data
        }
      } else {
        response = {
          status: ApiResponseStatus.ERROR
        }
      }
      return response;
    } catch (error) {
      // console.log(error)
      throw new HttpException("email address is not exist", 404);
    }
  }

  async dsaVerifyGmailOtp(createGmailotpVerifyDto: CreateGmailotpVerifyDto) {
    try {
      let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: createGmailotpVerifyDto.dsaApplicantId } })
      // console.log(fact_dsa_applicant_detail)
      if (fact_dsa_applicant_detail.emailId) {
        let email_otp_generate_verify = CONFIG.VERIFY_BACKEND_HOST_GMAIL_VERIFY_OTP
        let email_otp_verify = await axios.post(email_otp_generate_verify, { email: createGmailotpVerifyDto.email, otp: createGmailotpVerifyDto.otp })
        if (email_otp_verify.data.status === "Ok") {
          let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { emailId: createGmailotpVerifyDto.email } });
          let fact_dsa_applicant_detail_data = { ...fact_dsa_applicant_detail, ...createGmailotpVerifyDto };
          fact_dsa_applicant_detail_data.emailIdOtpVerify = "true"
          let updated_transaction = await this.factDsaApplicantDetailRepository.save(fact_dsa_applicant_detail_data);
          let response: ApiResponse<FactDsaApplicantDetail> = {
            status: ApiResponseStatus.SUCCESS,
            data: email_otp_verify.data
          };
          return response;
        }
        else {
          let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { emailId: createGmailotpVerifyDto.email } });
          let fact_dsa_applicant_detail_data = { ...fact_dsa_applicant_detail, ...createGmailotpVerifyDto };
          fact_dsa_applicant_detail_data.emailIdOtpVerify = "false"
          let updated_transaction = await this.factDsaApplicantDetailRepository.save(fact_dsa_applicant_detail_data);
          let response: ApiResponse<FactDsaApplicantDetail> = {
            status: ApiResponseStatus.ERROR,
            data: email_otp_verify.data
          };
          return response;
        }
      }
    } catch (error) {
      // console.log(error)
      throw new HttpException("email otp is not valid", 404);
    }
  }

  async aadharCardPopulate(createAadhaarOtpDto: CreateAadhaarOtpDto) {
    // try {
    // let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: createAadhaarXmlDto.dsaApplicantId } })
    let aadhaar_card_populate = CONFIG.VERIFY_BACKEND_HOST_AAHAAR_CARD_POPULATE
    let aadhaar_card = await axios.post(aadhaar_card_populate, { aadhaarNo: createAadhaarOtpDto.aadhaarNo })
    let response: ApiResponse<FactDsaApplicantDetail>;
    response = {
      status: ApiResponseStatus.SUCCESS,
      data: aadhaar_card.data
    }

    return response;
    // } catch (error) {
    //   console.log(error)
    //   throw new HttpException("aadhaar card is not valid", 404);
    // }
  }


  async aadharCardVerify(createAadhaarXmlDto: CreateAadhaarXmlDto) {
    try {
      // console.log(createAadhaarXmlDto.requestId, createAadhaarXmlDto.otp, createAadhaarXmlDto.aadhaarNo)
      // let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: createAadhaarXmlDto.dsaApplicantId } })
      let aadhaar_card_verify = CONFIG.VERIFY_BACKEND_HOST_AAHAAR_CARD_VERIFY
      let aadhaar_card = await axios.post(aadhaar_card_verify, { otp: createAadhaarXmlDto.otp, requestId: createAadhaarXmlDto.requestId, dsaApplicantId: createAadhaarXmlDto.dsaApplicantId, mobileNumber: createAadhaarXmlDto.mobileNumber, content: "y", aadhaarNo: createAadhaarXmlDto.aadhaarNo })
      if (aadhaar_card.data.status = "Success") {
        console.log("called")
      }
      let response: ApiResponse<FactDsaApplicantDetail>;
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: aadhaar_card.data

      }

      return response;
    } catch (error) {
      // console.log(error)
      throw new HttpException("aadhaar card is not valid", 404);
    }
  }

  async verifyPan(createPancardDto: CreatePancardDto) {
    try {
      // let fact_dsa_applicant_detail = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: createAadhaarXmlDto.dsaApplicantId } })
      let pan_card_verify = CONFIG.VERIFY_BACKEND_HOST_PAN_CARD_VERIFY
      let pan_card = await axios.post(pan_card_verify, { pan: createPancardDto.pan, consent: "Y" })

      let response: ApiResponse<FactDsaApplicantDetail>;
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: pan_card.data

      }

      return response;
    } catch (error) {
      // console.log(error)
      throw new HttpException("aadhaar card is not valid", 404);
    }
  }



}
