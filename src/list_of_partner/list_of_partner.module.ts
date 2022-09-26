import { Module } from '@nestjs/common';
import { ListOfPartnerService } from './list_of_partner.service';
import { ListOfPartnerController } from './list_of_partner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { ApplicationStatus } from 'src/application_status/entities/application_status.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FactDsaApplicantDetail,ApplicationStatus])],
  controllers: [ListOfPartnerController],
  providers: [ListOfPartnerService]
})
export class ListOfPartnerModule {}
