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

  @Post('findProgress')
  findAll(@Body('mobileNumber')mobileNumber:string) {
    return this.progressBarService.findAll(mobileNumber);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progressBarService.findOne(+id);
  }

  @Post('update')
  update(@Body() updateProgressBarDto: UpdateProgressBarDto) {
    return this.progressBarService.update(updateProgressBarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progressBarService.remove(+id);
  }
}
