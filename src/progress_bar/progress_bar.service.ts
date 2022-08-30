import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { Repository } from 'typeorm';
import { CreateProgressBarDto } from './dto/create-progress_bar.dto';
import { UpdateProgressBarDto } from './dto/update-progress_bar.dto';
import { ProgressBar } from './entities/progress_bar.entity';

@Injectable()
export class ProgressBarService {
  constructor(@InjectRepository(ProgressBar) private progressBarRepository: Repository<ProgressBar>,
  @InjectRepository(FactDsaApplicantDetail) private factDsaApplicantDetailRepository: Repository<FactDsaApplicantDetail>) { }

  async create(createProgressBarDto: CreateProgressBarDto) {
    let progress_bar = new ProgressBar()
    progress_bar.buttonTittle = createProgressBarDto.buttonTittle
    progress_bar.uiLevel = createProgressBarDto.uiLevel
    progress_bar.uiComponent= createProgressBarDto.uiComponent
    progress_bar.currentCode= createProgressBarDto.currentCode
    progress_bar.nextCode= createProgressBarDto.nextCode
    progress_bar.currentStage= createProgressBarDto.currentStage
    progress_bar.nextStage= createProgressBarDto.nextStage
    progress_bar.previousStage= createProgressBarDto.previousStage
    progress_bar.statusCode= createProgressBarDto.statusCode
    progress_bar.statusName= createProgressBarDto.statusName
    let saved_progress_bar = await this.progressBarRepository.save(progress_bar)
    let response: ApiResponse<ProgressBar> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_progress_bar
    };
    return response;
  }

}
