import { Module } from '@nestjs/common';
import { DocumentUploadService } from './document_upload.service';
import { DocumentUploadController } from './document_upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentUpload } from './entities/document_upload.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DocumentUpload])],
  controllers: [DocumentUploadController],
  providers: [DocumentUploadService]
})
export class DocumentUploadModule {}
