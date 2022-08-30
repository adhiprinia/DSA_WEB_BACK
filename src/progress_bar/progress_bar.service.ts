import { Injectable } from '@nestjs/common';
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
    progress_bar.mobileNumber = createProgressBarDto.mobileNumber
    progress_bar.progressBarCount = createProgressBarDto.progressBarCount
    let saved_progress_bar = await this.progressBarRepository.save(progress_bar)
    let response: ApiResponse<ProgressBar> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_progress_bar
    };
    return response;
  }

  async findAll(mobileNumber: string) {
    let progress_bar = await this.factDsaApplicantDetailRepository.findOne({ where: { mobileNumber: mobileNumber } })
    switch (progress_bar.statusCode) {
      case "PA001":
        
        return (progress_bar.statusCode)

      case "PA002":
        return (progress_bar.statusCode)

      case "PA003":
        return (progress_bar.statusCode)

      default:

    }
    return `please the details`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progressBar`;
  }

  async update(updateProgressBarDto: UpdateProgressBarDto) {
    let progress_bar = await this.progressBarRepository
      .createQueryBuilder()
      .update(ProgressBar)
      .where({ mobileNumber: updateProgressBarDto.mobileNumber })

      .set({
        progressBarCount: updateProgressBarDto.progressBarCount
      })
      .execute()
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: progress_bar
    };
    console.log(progress_bar);
    console.log("count", updateProgressBarDto.progressBarCount)
    console.log("number", updateProgressBarDto.mobileNumber)

    return response;
  }

  remove(id: number) {
    return `This action removes a #${id} progressBar`;
  }
}
