import { Module } from '@nestjs/common';
import { CibilDetService } from './cibil_det.service';
import { CibilDetController } from './cibil_det.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FactDsaApplicantDetail])],
  controllers: [CibilDetController],
  providers: [CibilDetService]
})
export class CibilDetModule {}
