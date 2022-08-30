import { PartialType } from '@nestjs/swagger';
import { CreateReferenceDetailDto } from './create-reference_detail.dto';

export class UpdateReferenceDetailDto extends PartialType(CreateReferenceDetailDto) { 
    readonly dsaApplicantId:string;
    readonly referenceDetailModBy:string;
    readonly referenceDetailModOn:string

}