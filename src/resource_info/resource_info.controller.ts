import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResourceInfoService } from './resource_info.service';
import { CreateResourceInfoDto } from './dto/create-resource_info.dto';
import { UpdateResourceInfoDto } from './dto/update-resource_info.dto';
import { ResourceInfo } from './entities/resource_info.entity';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';
import { FilterByDataDto } from './dto/filterByData-resource_info.dto';

@Controller('resource_info')
export class ResourceInfoController {
  constructor(private readonly resourceInfoService: ResourceInfoService) {}

  @Post('create')
  create(@Body() createResourceInfoDto: CreateResourceInfoDto): Promise<ApiResponse<ResourceInfo>> {
    return this.resourceInfoService.create(createResourceInfoDto);
  }

  @Post('findAll')
  findAll(): Promise<ApiResponse<ResourceInfo[]>> {
    return this.resourceInfoService.findOne();
  }
  
  @Post('findAllDashBoard')
  findAllDashBoard(@Body()id:string): Promise<ApiResponse<ResourceInfo[]>> {
    return this.resourceInfoService.findAllDashBoard(id);
  }

  @Post('getCatagory')
  getCatagory(): Promise<ApiResponse<ResourceInfo>> {
    return this.resourceInfoService.getCatagory();
  }

  @Post('fitlerByData')
   fitlerByData(@Body() filterByDataDto:FilterByDataDto):Promise<ApiResponse<ResourceInfo>>{
    return this.resourceInfoService.fitlerByData(filterByDataDto)
  }

  @Post('findOne')
  findByDash(@Body('id') id: string): Promise<ApiResponse<ResourceInfo>> {
    return this.resourceInfoService.findByDash(id);
  }

  @Post('update')
  update( @Body() updateResourceInfoDto: UpdateResourceInfoDto): Promise<ApiResponse<ResourceInfo>> {
    return this.resourceInfoService.update( updateResourceInfoDto);
  }


  @Post('comletedUpdate')
  comletedUpdate(@Body()updateResourceInfoDto: UpdateResourceInfoDto) {
    return this.resourceInfoService.comletedUpdate(updateResourceInfoDto);
  }
}
