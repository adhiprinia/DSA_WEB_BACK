import { PartialType } from '@nestjs/swagger';
import { CreateFactDsaApplicantDetailDto } from './create-fact_dsa_applicant_detail.dto';

export class UpdateFactDsaApplicantDetailDto extends PartialType(CreateFactDsaApplicantDetailDto) {
    DsaApplicantDetailId:string;
    userId:string;
     masterId:string;
    factDsaApplicantDetailModBy:string
    factDsaApplicantDetailModOn:string
}
