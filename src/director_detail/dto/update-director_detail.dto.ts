import { PartialType } from '@nestjs/swagger';
import { CreateDirectorDetailDto } from './create-director_detail.dto';

export class UpdateDirectorDetailDto extends PartialType(CreateDirectorDetailDto) {
    dsaDirectorId:string;
    status:string
}
