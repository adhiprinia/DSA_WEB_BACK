import { PartialType } from '@nestjs/swagger';
import { CreateResourceInfoDto } from './create-resource_info.dto';

export class UpdateResourceInfoDto extends PartialType(CreateResourceInfoDto) {
    dsaApplicantId:string;
    complete:string;
    dsaResourceInfoModBy:string;
    dsaResourceInfoModOn:Date;
}
