import { PartialType } from '@nestjs/swagger';
import { CreateResourceInfoUploadDto } from './create-resource_info_upload.dto';

export class UpdateResourceInfoUploadDto extends PartialType(CreateResourceInfoUploadDto) {
    dsaResourceId:string;
}
