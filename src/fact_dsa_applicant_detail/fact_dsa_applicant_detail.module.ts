import { Module } from '@nestjs/common';
import { FactDsaApplicantDetailService } from './fact_dsa_applicant_detail.service';
import { FactDsaApplicantDetailController } from './fact_dsa_applicant_detail.controller';
import { FactDsaApplicantDetail } from './entities/fact_dsa_applicant_detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';
import { extname } from 'path';
import { AddressDetail } from 'src/address_detail/entities/address_detail.entity';
import { BankDetail } from 'src/bank_detail/entities/bank_detail.entity';
import { ReferenceDetail } from 'src/reference_detail/entities/reference_detail.entity';
import { DocumentUpload } from 'src/document_upload/entities/document_upload.entity';
import { ResourceInfo } from 'src/resource_info/entities/resource_info.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FactDsaApplicantDetail,AddressDetail,BankDetail,ReferenceDetail,DocumentUpload,ResourceInfo]),
  MulterModule.register({
    storage: diskStorage({
      destination:'./client',
      filename: (req, file, cb) => {
        const randomName = Array(32).fill(null).map(() => 
       (Math.round(Math.random() * 16)).toString(16)).join('');
         return cb(null, `${randomName}${extname(file.originalname)}`);
         },
    }),
  }),
],
  controllers: [FactDsaApplicantDetailController],
  providers: [FactDsaApplicantDetailService]
})
export class FactDsaApplicantDetailModule {}
