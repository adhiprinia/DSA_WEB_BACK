import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EzfloIntegrateService } from './ezflo_integrate.service';
import { CreateEzfloIntegrateDto, EzfloQueryStatus } from './dto/create-ezflo_integrate.dto';
import { UpdateEzfloIntegrateDto } from './dto/update-ezflo_integrate.dto';

@Controller('ezflo_integrate')
export class EzfloIntegrateController {
  constructor(private readonly ezfloIntegrateService: EzfloIntegrateService) {}

  @Post('ezfloCheckQueryStatus')
  ezfloCheckQuery(@Body() ezfloQueryStatus:EzfloQueryStatus) {
    return this.ezfloIntegrateService.ezfloCheckQuery(ezfloQueryStatus);
  }

  @Post('ezfloPullQueryStatus')
  ezfloPullQueryStatus(@Body()ezfloQueryStatus:EzfloQueryStatus) {
    return this.ezfloIntegrateService.ezfloPullQueryStatus(ezfloQueryStatus);
  }

  @Post('ezfloUpdateQueryStatus')
  ezfloUpdateQueryStatus(@Body()ezfloQueryStatus:EzfloQueryStatus) {
    return this.ezfloIntegrateService.ezfloUpdateQueryStatus(ezfloQueryStatus);
  }

  @Post('ezfloSubmitQueryStatus')
  ezfloSubmitQueryStatus(@Body()ezfloQueryStatus:EzfloQueryStatus) {
    return this.ezfloIntegrateService.ezfloSubmitQueryStatus(ezfloQueryStatus);
  }
}
