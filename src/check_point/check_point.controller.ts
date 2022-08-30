import { Controller, Get, Post, Patch, Body, Delete } from '@nestjs/common';
import { CheckPointService } from './check_point.service';
import { CreateCheckPointDto } from './dto/create-check_point.dto';
import { UpdateCheckPointDto } from './dto/update-check_point.dto';

@Controller('check-point')
export class CheckPointController {
  constructor(private readonly checkPointService: CheckPointService) {}

  @Post('findPanProof')
  findPanProof(@Body('id') id: string) {
    return this.checkPointService.findPanProof(id);
  }

  @Post('findpartnersProof')
  findpartnersProof(@Body('id') id: string) {
    return this.checkPointService.findPartnersProof(id);
  }

  @Post('findAddressProof')
  findAddressProof(@Body('id') id: string) {
    return this.checkPointService.findAddressProof(id);
  }

  @Post('findPassportSizePhoto')
  findPassportSizePhoto(@Body('id') id: string) {
    return this.checkPointService.findPassportSizePhoto(id);
  }

  @Post('findItReturn')
  findItReturn(@Body('id') id: string) {
    return this.checkPointService.findItReturn(id);
  }

  @Post('findBankStatement')
  findBankStatement(@Body('id') id: string) {
    return this.checkPointService.findBankStatement(id);
  }
////
  @Post('findEnrolmentLetter')
  findEnrolmentLetter(@Body('id') id: string) {
    return this.checkPointService.findEnrolmentLetter(id);
  }

  @Post('findGstRegistration')
  findGstRegistration(@Body('id') id: string) {
    return this.checkPointService.findGstRegistration(id);
  }

  @Post('findIncorporationDocument')
  findIncorporationDocument(@Body('id') id: string) {
    return this.checkPointService.findIncorporationDocument(id);
  }

  @Post('findBoardResolution')
  findBoardResolution(@Body('id') id: string) {
    return this.checkPointService.findBoardResolution(id);
  }

  @Post('findCancelledChqCopy')
  findCancelledChqCopy(@Body('id') id: string) {
    return this.checkPointService.findCancelledChqCopy(id);
  }
}
