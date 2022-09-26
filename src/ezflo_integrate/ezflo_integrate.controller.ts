import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { EzfloIntegrateService } from './ezflo_integrate.service';
import { CreateEzfloIntegrateDto, EzfloQueryStatus } from './dto/create-ezflo_integrate.dto';
import { UpdateEzfloIntegrateDto } from './dto/update-ezflo_integrate.dto';
import { DashBoardDto } from './dto/DashBoard.dto';
import { GetAllQueriesDto } from './dto/get_all_queries.dto';
import { createReadStream } from 'fs';
import { Response } from 'express';

@Controller('ezflo_integrate')
export class EzfloIntegrateController {
  constructor(private readonly ezfloIntegrateService: EzfloIntegrateService) {}

  ///cibil api for demo purpose
  @Get('getCibil')
  async getCibil(@Res() res: Response) {
    try {
      const file = createReadStream('public/cibil.pdf');
      file.pipe(res);

      // return (await readFile('public/cibil.pdf')).buffer;
    }
    catch(err){
      return err;
    }
  }

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

  /// below methods are speacial methods whiich modifies the ezflo responses
  @Post('dashboard')
  dashBoard(@Body() dashBoardDto : DashBoardDto){
    return this.ezfloIntegrateService.getDashboard(dashBoardDto);
  }

  /// funtion to get all queries
  @Post('allQueries')
  getAllQueries(@Body() getAllQueriesDto : GetAllQueriesDto){
    return this.ezfloIntegrateService.getAllQueries(getAllQueriesDto);
  }
}

