import { PartialType } from '@nestjs/swagger';
import { CreateBankDetailDto } from './create-bank_detail.dto';

export class UpdateBankDetailDto extends PartialType(CreateBankDetailDto) {
    readonly dsaApplicantId:string;
    readonly bankDetailModBy:string;
    readonly bankDetailModOn:string;
}
