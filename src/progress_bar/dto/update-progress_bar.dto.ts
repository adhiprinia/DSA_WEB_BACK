import { PartialType } from '@nestjs/swagger';
import { CreateProgressBarDto } from './create-progress_bar.dto';

export class UpdateProgressBarDto extends PartialType(CreateProgressBarDto) {
    progressBarId:string;
    dsaApplicantId:string;
    progressBarModBy:string;
    progressBarModOn:Date;
}
