import { Module } from '@nestjs/common';
import { ResourceInfoUploadService } from './resource_info_upload.service';
import { ResourceInfoUploadController } from './resource_info_upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceInfoUpload } from './entities/resource_info_upload.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ResourceInfoUpload])],
  controllers: [ResourceInfoUploadController],
  providers: [ResourceInfoUploadService]
})
export class ResourceInfoUploadModule {}
