import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';
import { BankDetailService } from './bank_detail.service';
import { CreateBankDetailDto } from './dto/create-bank_detail.dto';
import { UpdateBankDetailDto } from './dto/update-bank_detail.dto';
import { BankDetail } from './entities/bank_detail.entity';
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('bank_detail')
export class BankDetailController {
  constructor(private readonly bankDetailService: BankDetailService) { }

  @Post()
  create(@Body() createBankDetailDto: CreateBankDetailDto): Promise<ApiResponse<BankDetail>> {
    return this.bankDetailService.create(createBankDetailDto);
  }

  @Post('aadhaarVerify')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'image' },
    { name: 'bankDetailId' },
  ]))
  uploadCancelledChegue(@UploadedFiles() file, @Body() body) {
    console.log("advisorId in controller", body.bankDetailId)
    return this.bankDetailService.uploadCancelledChegue(file.image, body.bankDetailId)
  }

  @Post("findAll")
  findAll(): Promise<ApiResponse<BankDetail[]>> {
    return this.bankDetailService.findAll();
  }

  @Post('findOne')
  findOne(@Body('dsaApplicantId') id: string): Promise<ApiResponse<BankDetail>> {
    return this.bankDetailService.findOne(id);
  }

  @Post('update')
  update(@Body() updateBankDetailDto: UpdateBankDetailDto): Promise<ApiResponse<BankDetail>> {
    return this.bankDetailService.update(updateBankDetailDto);
  }

}
