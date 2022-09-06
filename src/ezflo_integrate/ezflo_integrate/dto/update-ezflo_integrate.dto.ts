import { PartialType } from '@nestjs/swagger';
import { CreateEzfloIntegrateDto } from './create-ezflo_integrate.dto';

export class UpdateEzfloIntegrateDto extends PartialType(CreateEzfloIntegrateDto) {}
