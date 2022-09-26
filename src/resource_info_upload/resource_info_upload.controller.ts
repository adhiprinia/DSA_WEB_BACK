import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { ResourceInfoUploadService } from './resource_info_upload.service';
import { CreateResourceInfoUploadDto } from './dto/create-resource_info_upload.dto';
import { UpdateResourceInfoUploadDto } from './dto/update-resource_info_upload.dto';
import { ApiResponse } from 'src/config/response';
import { ResourceInfoUpload } from './entities/resource_info_upload.entity';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { writeFile, readFile } from 'fs/promises';
import { Logger } from '@nestjs/common/services';

@Controller('dsa_resource')
export class ResourceInfoUploadController {
  constructor(private readonly resourceInfoUploadService: ResourceInfoUploadService) { }

  @Post('create')
  create(@Body() createResourceInfoUploadDto: CreateResourceInfoUploadDto): Promise<ApiResponse<ResourceInfoUpload>> {
    // console.log(createResourceInfoUploadDto.course)
    // let base64Data = createResourceInfoUploadDto.course.replace(/^data:image\/png;base64,/,"")
    // let binaryData = new Buffer(base64Data, 'base64').toString('binary')
    // let filePath = './resource_centre/' + '.' + 'pdf'
    // writeFile(filePath, binaryData)
    return this.resourceInfoUploadService.create(createResourceInfoUploadDto);
  }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('image'))
  // async upload(@Body() createResourceInfoUploadDto: CreateResourceInfoUploadDto, @UploadedFile()file: Express.Multer.File) {

  //   const randomName = Array(32).fill(null).map(() => 
  //   (Math.round(Math.random() * 16)).toString(16)).join('');
  //   let filePath = './resource_centre/'+'.'+file.originalname.split('.')[1] 
  //   console.log(filePath)
  //   writeFile(filePath,file.buffer)
  //   return this.resourceInfoUploadService.create(createResourceInfoUploadDto,filePath);
  // }


  @Post('findAll')
  findAll(): Promise<ApiResponse<ResourceInfoUpload[]>> {
    return this.resourceInfoUploadService.findAll();
  }

  @Post('getResourceCentre')
  getResourceCentre(): Promise<ApiResponse<ResourceInfoUpload>> {
    return this.resourceInfoUploadService.getResourceCentre();
  }

  // @Get('findOne')
  // findOne(@Body('id') id: string) {
  //   return this.resourceInfoUploadService.findOne(id);
  // }

  @Post('update')
  update(@Body() updateResourceInfoUploadDto: UpdateResourceInfoUploadDto) {
    return this.resourceInfoUploadService.update(updateResourceInfoUploadDto);
  }

  @Post('findColumns')
  findColumns() {
    return this.resourceInfoUploadService.findColumns();
  }


}

