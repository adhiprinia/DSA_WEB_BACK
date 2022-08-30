import { PartialType } from '@nestjs/swagger';
import { CreateCheckPointDto } from './create-check_point.dto';

export class UpdateCheckPointDto extends PartialType(CreateCheckPointDto) {
    checkPointId:string;
    checkPointModBy:string;
    checkPointModOn:string;
}
