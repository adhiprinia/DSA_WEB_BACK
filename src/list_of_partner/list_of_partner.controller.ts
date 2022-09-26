import { Controller, Post } from '@nestjs/common';
import { ListOfPartnerService } from './list_of_partner.service';

@Controller('list_of_partner')
export class ListOfPartnerController {
  constructor(private readonly listOfPartnerService: ListOfPartnerService) {}


  @Post('listOfPartnerLead')
  listOfPartnerLead(){
    return this.listOfPartnerService.listOfPartnerLead()
  }

  @Post('listOfPartnerOpportunities')
  listOfPartnerOpportunities(){
    return this.listOfPartnerService.listOfPartnerOpportunities()
  }
}
