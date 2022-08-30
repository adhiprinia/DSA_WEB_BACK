import { Module } from '@nestjs/common';
import { ResourceInfoService } from './resource_info.service';
import { ResourceInfoController } from './resource_info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceInfo } from './entities/resource_info.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ResourceInfo])],
  controllers: [ResourceInfoController],
  providers: [ResourceInfoService]
})
export class ResourceInfoModule {}
