import { Module } from '@nestjs/common';
import { ProgressBarService } from './progress_bar.service';
import { ProgressBarController } from './progress_bar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgressBar } from './entities/progress_bar.entity';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProgressBar,FactDsaApplicantDetail])],
  controllers: [ProgressBarController],
  providers: [ProgressBarService]
})
export class ProgressBarModule {}
