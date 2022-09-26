import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';

import { ApplicationStatusService } from './application_status.service';
import { CreateApplicationStatusDto } from './dto/create-application_status.dto';
import { FindProgressBar } from './dto/find-progress-bar.dto';
import { UpdateApplicationStatusDto } from './dto/update-application_status.dto';
import { ApplicationStatus } from './entities/application_status.entity';

@Controller('application_status')
export class ApplicationStatusController {
  constructor(private readonly applicationStatusService: ApplicationStatusService) { }


  @Post('create')
  create(@Body() createApplicationStatusDto: CreateApplicationStatusDto): Promise<ApiResponse<ApplicationStatus>> {
    return this.applicationStatusService.create(createApplicationStatusDto);
  }

  @Post('findAll')
  findAll(): Promise<ApiResponse<ApplicationStatus[]>> {
    return this.applicationStatusService.findAll();
  }
  @Post('findLead')
  findLead(): Promise<ApiResponse<ApplicationStatus[]>> {
    return this.applicationStatusService.findLead();
  }

  @Post('findOpportunities')
  findOpportunities(): Promise<ApiResponse<ApplicationStatus[]>> {
    return this.applicationStatusService.findOpportunities();
  }
  @Post('findProgressBar')
  findProgressBar(@Body() findProgressBar: FindProgressBar): Promise<ApiResponse<ApplicationStatus>> {
    console.log("LLLLLLLKJKJKJH");
    return this.applicationStatusService.findProgressBar(findProgressBar);
  }

  @Post('findProgressStepper')
  findProgressStepper(@Body() findProgressBar: FindProgressBar): Promise<ApiResponse<ApplicationStatus>> {
    console.log("LLLLLLLKJKJKJH");
    return this.applicationStatusService.findProgressStepper(findProgressBar);
  }


  @Post('progressBar')
  progressBar(@Body() createApplicationStatusDto: CreateApplicationStatusDto): Promise<ApiResponse<ApplicationStatus>> {
    return this.applicationStatusService.progressBar(createApplicationStatusDto);
  }

  @Post('update')
  update(@Body() updateApplicationStatusDto: UpdateApplicationStatusDto): Promise<ApiResponse<ApplicationStatus>> {
    return this.applicationStatusService.update(updateApplicationStatusDto);
  }
}
