import { PartialType } from '@nestjs/swagger';
import { CreateAddressDetailDto } from './create-address_detail.dto';

export class UpdateAddressDetailDto extends PartialType(CreateAddressDetailDto) {
    dsaApplicantId: string;
    readonly addressDetailId:string;
    readonly addressDetailModOn:Date;
    readonly addressDetailModBy:string
}
