import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { Repository, DeleteResult } from 'typeorm';
import { CreateReferenceDetailDto } from './dto/create-reference_detail.dto';
import { UpdateReferenceDetailDto } from './dto/update-reference_detail.dto';
import { ReferenceDetail } from './entities/reference_detail.entity';

@Injectable()
export class ReferenceDetailService {
  constructor(@InjectRepository(ReferenceDetail) private referenceDetailRepository: Repository<ReferenceDetail>) { }
  async create(createReferenceDetailDto: CreateReferenceDetailDto): Promise<ApiResponse<ReferenceDetail>> {
    let reference_detail = new ReferenceDetail()
    reference_detail.dsaApplicantId = createReferenceDetailDto.dsaApplicantId
    reference_detail.name = createReferenceDetailDto.name
    reference_detail.relationshipWithApplicant = createReferenceDetailDto.relationshipWithApplicant
    reference_detail.mobileNo = createReferenceDetailDto.mobileNo
    reference_detail.knowningSince = createReferenceDetailDto.knowningSince
    reference_detail.addressLine1 = createReferenceDetailDto.addressLine1
    reference_detail.addressLine2 = createReferenceDetailDto.addressLine2
    reference_detail.landmark = createReferenceDetailDto.landmark
    reference_detail.pincode = createReferenceDetailDto.pincode
    reference_detail.area = createReferenceDetailDto.area
    reference_detail.postOffice = createReferenceDetailDto.postOffice
    reference_detail.city = createReferenceDetailDto.city
    reference_detail.district = createReferenceDetailDto.district
    reference_detail.state = createReferenceDetailDto.state
    reference_detail.country = createReferenceDetailDto.country
    reference_detail.referenceDetailEntdBy = createReferenceDetailDto.referenceDetailEntdBy
    reference_detail.referenceDetailEntdOn = createReferenceDetailDto.referenceDetailEntdOn
    let saved_reference_detail = await this.referenceDetailRepository.save(reference_detail)
    // console.log(saved_reference_detail,"vvvvvvvvvvv")
    let response: ApiResponse<ReferenceDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_reference_detail
    };
    return response;
  }

  async findAll(): Promise<ApiResponse<ReferenceDetail[]>> {
    let reference_detail_result = await this.referenceDetailRepository.find()
    let responsData = [];
    responsData.push({
      "reference_detail_result": reference_detail_result,
      "totalCount": reference_detail_result.length,
    });
    let response: ApiResponse<ReferenceDetail[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }
  async findOne(id: string): Promise<ApiResponse<ReferenceDetail>> {
    try { 
      if (id) {
        let reference_detail_result = await this.referenceDetailRepository.find({ where: { dsaApplicantId: id } });
        console.log(reference_detail_result);
        if(reference_detail_result.length===0){
          throw new HttpException("user not found",404)
        }
        let response: ApiResponse<ReferenceDetail>;
        if (reference_detail_result) {
          response = {
            status: ApiResponseStatus.SUCCESS,
            data: reference_detail_result
          }
        }
        else {
          response = {
            status: ApiResponseStatus.ERROR
          }
        }
        return response;
      }else {
        throw new HttpException("dsaApplicantId is not found in body",404)
      }
    } catch (error) {
      throw  error
    }

  }

  async update(updateReferenceDetailDto: UpdateReferenceDetailDto): Promise<ApiResponse<ReferenceDetail>> {
    let reference_detail_result = await this.referenceDetailRepository.findOne({ where: { dsaApplicantId: updateReferenceDetailDto.dsaApplicantId } });
    let reference_detail_data = { ...reference_detail_result, ...updateReferenceDetailDto };
    reference_detail_data.name = updateReferenceDetailDto.name
    reference_detail_data.relationshipWithApplicant = updateReferenceDetailDto.relationshipWithApplicant
    reference_detail_data.mobileNo = updateReferenceDetailDto.mobileNo
    reference_detail_data.knowningSince = updateReferenceDetailDto.knowningSince
    reference_detail_data.addressLine1 = updateReferenceDetailDto.addressLine1
    reference_detail_data.addressLine2 = updateReferenceDetailDto.addressLine2
    reference_detail_data.landmark = updateReferenceDetailDto.landmark
    reference_detail_data.pincode = updateReferenceDetailDto.pincode
    reference_detail_data.area = updateReferenceDetailDto.area
    reference_detail_data.postOffice = updateReferenceDetailDto.postOffice
    reference_detail_data.city = updateReferenceDetailDto.city
    reference_detail_data.district = updateReferenceDetailDto.district
    reference_detail_data.state = updateReferenceDetailDto.state
    reference_detail_data.country = updateReferenceDetailDto.country
    reference_detail_data.pincode = updateReferenceDetailDto.pincode
    reference_detail_data.referenceDetailModBy = updateReferenceDetailDto.referenceDetailModBy
    reference_detail_data.referenceDetailModOn = updateReferenceDetailDto.referenceDetailModOn
    let updated_reference_detail_data = await this.referenceDetailRepository.save(reference_detail_data);
    let response: ApiResponse<ReferenceDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_reference_detail_data
    };
    return response;
  }



}
