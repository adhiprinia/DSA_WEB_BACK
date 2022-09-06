import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';
import { DocumentUploadService } from './document_upload.service';
import { CreateDocumentUploadDto } from './dto/create-document_upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document_upload.dto';
import { DocumentUpload } from './entities/document_upload.entity';
import { writeFile } from 'fs/promises';
import { FindOneDocumentUpload } from './dto/findone-document_upload.dto';

@Controller('document_upload')
export class DocumentUploadController {
  constructor(private readonly uploadDocumentService: DocumentUploadService) {}

  @Post('create')
  create(@Body() createDocumentUploadDto: CreateDocumentUploadDto): Promise<ApiResponse<DocumentUpload>>  {
    return this.uploadDocumentService.create(createDocumentUploadDto);
  }

  @Post('findAll')
  findAll(): Promise<ApiResponse<DocumentUpload[]>>  {
    return this.uploadDocumentService.findAll();
  }

  @Post('findOne')
  findOne(@Body() findOneDocumentUpload: FindOneDocumentUpload): Promise<ApiResponse<DocumentUpload>>  {
    return this.uploadDocumentService.findOne(findOneDocumentUpload);
  }


  @Post('update')
  update(@Body() updateDocumentUploadDto: UpdateDocumentUploadDto): Promise<ApiResponse<DocumentUpload>>  {
    return this.uploadDocumentService.update(updateDocumentUploadDto);
  }


}
