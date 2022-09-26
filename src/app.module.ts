import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankDetailModule } from './bank_detail/bank_detail.module';
import { ReferenceDetailModule } from './reference_detail/reference_detail.module';
import { AddressDetailModule } from './address_detail/address_detail.module';
import { DocumentUploadModule } from './document_upload/document_upload.module';
import { CheckPointModule } from './check_point/check_point.module';
import { FactDsaApplicantDetailModule } from './fact_dsa_applicant_detail/fact_dsa_applicant_detail.module';
import { ApplicationStatusModule } from './application_status/application_status.module';
import { ResourceInfoModule } from './resource_info/resource_info.module';
import { EzfloIntegrateModule } from './ezflo_integrate/ezflo_integrate.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProgressBarModule } from './progress_bar/progress_bar.module';
import { DirectorDetailModule } from './director_detail/director_detail.module';
import { ApplicationStatus } from './application_status/entities/application_status.entity';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CibilDetModule } from './cibil_det/cibil_det.module';
import { ListOfPartnerModule } from './list_of_partner/list_of_partner.module';
import { ResourceInfoUploadModule } from './resource_info_upload/resource_info_upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      // host: 'localhost',
      host: 'karsha-devops.ckrnx54pl5hy.eu-west-2.rds.amazonaws.com',
      port: 5432,
      database: 'abhl',
      // // username: 'postgres',
      username: 'los_web_user',
      // password: 'password',   
      password: 'i0rt@80',
      // username: 'postgres',
      // username: 'los_master_user',
      // password: 'password',
      // password: 'i0rt@35',
      schema: 'dsa',
      entities: [
        "dist/**/*.entity{.ts,.js}"
      ],
      // entityPrefix: 'dsa_',
      synchronize: false,
      logging: false
    }),
    BankDetailModule,
    ReferenceDetailModule,
    AddressDetailModule,
    DocumentUploadModule,
    CheckPointModule,
    FactDsaApplicantDetailModule,
    ApplicationStatusModule,
    ResourceInfoModule,
    EzfloIntegrateModule,
    ApplicationStatus,  
    ProgressBarModule,
    DirectorDetailModule,
    CibilDetModule,
    ListOfPartnerModule,
    ResourceInfoUploadModule],
    
  controllers: [AppController],
  providers: [AppService],
  
}

)
export class AppModule {}
