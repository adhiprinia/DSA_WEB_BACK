import { Module } from '@nestjs/common';
import { EzfloIntegrateService } from './ezflo_integrate.service';
import { EzfloIntegrateController } from './ezflo_integrate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EzfloIntegrate } from './entities/ezflo_integrate.entity';
import { AddressDetail } from 'src/address_detail/entities/address_detail.entity';
import { BankDetail } from 'src/bank_detail/entities/bank_detail.entity';
import { ReferenceDetail } from 'src/reference_detail/entities/reference_detail.entity';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EzfloIntegrate,AddressDetail,BankDetail,ReferenceDetail,FactDsaApplicantDetail])],
  controllers: [EzfloIntegrateController],
  providers: [EzfloIntegrateService]
})
export class EzfloIntegrateModule {}
