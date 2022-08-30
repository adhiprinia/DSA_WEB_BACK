import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { ProgressBar } from 'src/progress_bar/entities/progress_bar.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateApplicationStatusDto } from './dto/create-application_status.dto';
import { UpdateApplicationStatusDto } from './dto/update-application_status.dto';
import { ApplicationStatus } from './entities/application_status.entity';

@Injectable()
export class ApplicationStatusService {
  constructor(@InjectRepository(ApplicationStatus) private applicationStatusRepository: Repository<ApplicationStatus>,
    @InjectRepository(ProgressBar) private progressBarRepository: Repository<ProgressBar>,) { }
  async create(createApplicationStatusDto: CreateApplicationStatusDto): Promise<ApiResponse<ApplicationStatus>> {
    let application_status = new ApplicationStatus()
    application_status.dsaApplicantId = createApplicationStatusDto.dsaApplicantId
    application_status.buttonTittle = createApplicationStatusDto.buttonTittle
    application_status.uiLevel = createApplicationStatusDto.uiLevel
    application_status.uiComponent = createApplicationStatusDto.uiComponent
    application_status.currentCode = createApplicationStatusDto.currentCode
    application_status.currentStage = createApplicationStatusDto.currentStage
    application_status.nextStage = createApplicationStatusDto.nextStage
    application_status.previousStage = createApplicationStatusDto.previousStage
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

  async findAll(): Promise<ApiResponse<ApplicationStatus[]>> {
    let application_status_result = await this.applicationStatusRepository.find()
    let responsData = [];
    responsData.push({
      "application_status_result": application_status_result,
      "totalCount": application_status_result.length,
    });
    let response: ApiResponse<ApplicationStatus[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }
  async findProgressBar(id: string): Promise<ApiResponse<ApplicationStatus>> {
    let application_status_result = await this.applicationStatusRepository.findOne({ where: { dsaApplicantId: id } })
    let responsData = [];
    responsData.push({
      "application_status_result": application_status_result,
    });
    let response: ApiResponse<ApplicationStatus> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }



  async progressBar(id: string): Promise<ApiResponse<ApplicationStatus>> {
    try {
      let application_status_result = await this.applicationStatusRepository.findOne({ where: { dsaApplicantId: id } });
      let current_code = application_status_result.currentCode
      console.log("current_code", current_code)
      let progress_bar = await this.progressBarRepository.findOne({ where: { currentCode: current_code } })
      console.log(progress_bar)
      if(progress_bar===null){
        throw new HttpException("completed",404)
      }
      else if (current_code === progress_bar.currentCode) {
        let application_status_results = await this.applicationStatusRepository

          .createQueryBuilder()
          .update(ApplicationStatus)
          .where({ dsaApplicantId: id })
          .set(
            {
              buttonTittle: progress_bar.buttonTittle,
              uiLevel: progress_bar.uiLevel,
              uiComponent: progress_bar.uiComponent,
              currentCode: progress_bar.nextCode,
              currentStage: progress_bar.currentStage,
              nextStage: progress_bar.nextStage,
              previousStage: progress_bar.previousStage,
              statusCode: progress_bar.statusCode,
              statusName: progress_bar.statusName
            }
          )
          .execute()
      }

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
    } catch (error) {
      throw error
    }
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


}
