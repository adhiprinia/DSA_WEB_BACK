import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';
import { ReferenceDetailService } from './reference_detail.service';
import { CreateReferenceDetailDto } from './dto/create-reference_detail.dto';
import { UpdateReferenceDetailDto } from './dto/update-reference_detail.dto';
import { ReferenceDetail } from './entities/reference_detail.entity';

@Controller('reference_detail')
export class ReferenceDetailController {
  constructor(private readonly referenceDetailService: ReferenceDetailService) {}

  @Post('create')
  create(@Body() createReferenceDetailDto: CreateReferenceDetailDto):Promise<ApiResponse<ReferenceDetail>> {
    return this.referenceDetailService.create(createReferenceDetailDto);
  }

  @Post('findEnglish')
  findEnglish():Promise<ApiResponse<ReferenceDetail[]>> {
    return this.referenceDetailService.findEnglish();
  }
  @Post('findAll')
  findAll():Promise<ApiResponse<ReferenceDetail[]>> {
    return this.referenceDetailService.findAll();
  }

  @Post('findEnglish')
  findHindi():Promise<ApiResponse<ReferenceDetail[]>> {
    return this.referenceDetailService.findHindi();
  }

  @Post('findOne')
  findOne(@Body() id: string):Promise<ApiResponse<ReferenceDetail>> {
    return this.referenceDetailService.findOne(id);
  }

  @Post('update')
  update(@Body() updateReferenceDetailDto: UpdateReferenceDetailDto):Promise<ApiResponse<ReferenceDetail>> {
    return this.referenceDetailService.update(updateReferenceDetailDto);
  }

}
