import { Module } from '@nestjs/common';
import { ApplicationStatusService } from './application_status.service';
import { ApplicationStatusController } from './application_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationStatus } from './entities/application_status.entity';
import { ProgressBar } from 'src/progress_bar/entities/progress_bar.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ApplicationStatus,ProgressBar])],
  controllers: [ApplicationStatusController],
  providers: [ApplicationStatusService]
})
export class ApplicationStatusModule {}
