import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { DeleteResult, Repository } from 'typeorm';
import { CreateApplicationStatusDto } from './dto/create-application_status.dto';
import { UpdateApplicationStatusDto } from './dto/update-application_status.dto';
import { ApplicationStatus } from './entities/application_status.entity';

@Injectable()
export class ApplicationStatusService {
  constructor(@InjectRepository(ApplicationStatus)private applicationStatusRepository:Repository<ApplicationStatus> ){}
  async create(createApplicationStatusDto: CreateApplicationStatusDto):Promise<ApiResponse<ApplicationStatus>> {
    let application_status = new ApplicationStatus()
    application_status.dsaApplicantId = createApplicationStatusDto.dsaApplicantId
    application_status.statusCode = createApplicationStatusDto.statusCode
    application_status.statusName = createApplicationStatusDto.statusName
    application_status.applicantionDetailEntdBy = createApplicationStatusDto.applicantionDetailEntdBy
    application_status.applicantionDetailEntdOn = createApplicationStatusDto.applicantionDetailEntdOn

    let saved_application_status = await this.applicationStatusRepository.save(application_status)
    let response: ApiResponse<ApplicationStatus> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_application_status
    };
    return response;
  }

  async findEnglish():Promise<ApiResponse<ApplicationStatus[]>> {
    let application_status_result = await this.applicationStatusRepository.find()
    let responsData = [];
    responsData.push({
      "application_status_result":application_status_result,
      "totalCount":application_status_result.length,
    });
    let response: ApiResponse<ApplicationStatus[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findHindi():Promise<ApiResponse<ApplicationStatus[]>> {
    let application_status_result = await this.applicationStatusRepository.find()
    let responsData = [];
    responsData.push({
      "application_status_result":application_status_result,
      "totalCount":application_status_result.length,
    });
    let response: ApiResponse<ApplicationStatus[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findOne(id: string): Promise<ApiResponse<ApplicationStatus>> {
    let application_status_result = await this.applicationStatusRepository.findOne({ where: { dsaApplicationId: id } });
    let response: ApiResponse<ApplicationStatus>;
    if (application_status_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: application_status_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }

  async update(updateApplicationStatusDto: UpdateApplicationStatusDto): Promise<ApiResponse<ApplicationStatus>> {
    let application_status_result = await this.applicationStatusRepository.findOne({ where: { dsaApplicationId: updateApplicationStatusDto.dsaApplicationId } });
    let application_status_data = { ...application_status_result, ...updateApplicationStatusDto };
    application_status_data.dsaApplicantId = updateApplicationStatusDto.dsaApplicantId
    application_status_data.statusCode = updateApplicationStatusDto.statusCode
    application_status_data.statusName = updateApplicationStatusDto.statusName
    application_status_data.applicantionDetailModBy = updateApplicationStatusDto.applicantionDetailModBy
    application_status_data.applicantionDetailModBy = updateApplicationStatusDto.applicantionDetailModBy
    let updated_application_status_data = await this.applicationStatusRepository.save(application_status_data);
    let response: ApiResponse<ApplicationStatus> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_application_status_data
    };
    return response;
  }

  // async getuserId(phoneNumber:string): Promise<ApiResponse<ApplicationStatus>> {
  //   let application_status_result = await this.applicationStatusRepository
  //   .query(`select id from application_status where phone_number = :phoneNumber`,${phoneNumber})
  //   console.log(application_status_result)
  //   let response: ApiResponse<ApplicationStatus> = {
  //     status: ApiResponseStatus.SUCCESS,
  //     data: application_status_result
  //   };
  //   return response;
  // }
  
  async remove(id: string): Promise<ApiResponse<DeleteResult>> {
    let response: DeleteResult = await this.applicationStatusRepository.delete({ dsaApplicationId: id });
    
    let result: ApiResponse<DeleteResult> = {
      status: ApiResponseStatus.SUCCESS,
      data: response
    };
    return result;
  }
}
