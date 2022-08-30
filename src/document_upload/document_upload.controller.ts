import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';
import { DocumentUploadService } from './document_upload.service';
import { CreateDocumentUploadDto } from './dto/create-document_upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document_upload.dto';
import { DocumentUpload } from './entities/document_upload.entity';

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
  findOne(@Body('uploadDocumentId') id: string): Promise<ApiResponse<DocumentUpload>>  {
    return this.uploadDocumentService.findOne(id);
  }


  @Post('update')
  update(@Body() updateDocumentUploadDto: UpdateDocumentUploadDto): Promise<ApiResponse<DocumentUpload>>  {
    return this.uploadDocumentService.update(updateDocumentUploadDto);
  }


}
