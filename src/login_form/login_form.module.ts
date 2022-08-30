import { Module } from '@nestjs/common';
import { LoginFormService } from './login_form.service';
import { LoginFormController } from './login_form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { LoginForm } from './entities/login_form.entity';
import { AddressDetail } from 'src/address_detail/entities/address_detail.entity';
import { BankDetail } from 'src/bank_detail/entities/bank_detail.entity';
import { ReferenceDetail } from 'src/reference_detail/entities/reference_detail.entity';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { LoginForm } from './entities/login_form.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LoginForm,FactDsaApplicantDetail])],
  controllers: [LoginFormController],
  providers: [LoginFormService]
})
export class LoginFormModule {}
