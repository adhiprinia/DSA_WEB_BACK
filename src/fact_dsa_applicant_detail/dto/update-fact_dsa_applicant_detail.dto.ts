import { PartialType } from '@nestjs/swagger';
import { CreateFactDsaApplicantDetailDto } from './create-fact_dsa_applicant_detail.dto';

export class UpdateFactDsaApplicantDetailDto extends PartialType(CreateFactDsaApplicantDetailDto) {
    DsaApplicantDetailId:string;
    dsaApplicantId:string;
    userId:string;
     masterId:string;
     gstenteron:Date
     msmeenteron:Date
     trinenteron:Date
     applicantPhoto: string;
     takePhoto:string
    factDsaApplicantDetailModBy:string
    factDsaApplicantDetailModOn:string
}
