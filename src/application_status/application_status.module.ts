import { Module } from '@nestjs/common';
import { ApplicationStatusService } from './application_status.service';
import { ApplicationStatusController } from './application_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationStatus } from './entities/application_status.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ApplicationStatus])],
  controllers: [ApplicationStatusController],
  providers: [ApplicationStatusService]
})
export class ApplicationStatusModule {}
