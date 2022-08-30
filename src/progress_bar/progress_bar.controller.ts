import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgressBarService } from './progress_bar.service';
import { CreateProgressBarDto } from './dto/create-progress_bar.dto';
import { UpdateProgressBarDto } from './dto/update-progress_bar.dto';

@Controller('progress_bar')
export class ProgressBarController {
  constructor(private readonly progressBarService: ProgressBarService) {}

  @Post('create')
  create(@Body() createProgressBarDto: CreateProgressBarDto) {
    return this.progressBarService.create(createProgressBarDto);
  }

  // @Post('findProgress')
  // findAll(@Body('mobileNumber')mobileNumber:string) {
  //   return this.progressBarService.findAll(mobileNumber);
  // }

  //  @Post('findOne')
  // findOne(@Body('dsaApplicantId') dsaApplicantId: string) {
  //   return this.progressBarService.findOne(dsaApplicantId);
  // }

  // @Post('update')
  // update(@Body() updateProgressBarDto: UpdateProgressBarDto) {
  //   return this.progressBarService.update(updateProgressBarDto);
  // }

}
