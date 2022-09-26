import { Body, Controller, Get, Post } from '@nestjs/common';
import { CibilDetService } from './cibil_det.service';
import { FullFillOfferRequestBody } from './dto/full_fill_offer_req.dto';
import { GetCustomerAssetsRequest } from './dto/get_customer_asset_req.dto';
import { GetProductWebTokenRequest } from './dto/get_product_web_token.dto';
import { PingRequest } from './dto/ping_req.dto';
import { UpdateFactDsaApplicantDetailDto } from './dto/update-fact_dsa_applicant_detail.dto';

@Controller('cibil_det')
export class CibilDetController {
  constructor(private readonly cibilDetService: CibilDetService) { }


  @Get('getKamal')
  getKamal() {
    return this.cibilDetService.getKamal()
  }

  @Post('getCibil')
  getCibil(det, @Body() updateFactDsaApplicantDetailDto: UpdateFactDsaApplicantDetailDto) {
    // console.log(updateFactDsaApplicantDetailDto)
    return this.cibilDetService.getCibil(det, updateFactDsaApplicantDetailDto);
  }

  @Post('fullFillOffer')
  fullFillOffer(@Body() fullFillOfferRequestBody: FullFillOfferRequestBody) {
    return this.cibilDetService.fullFillOffer(fullFillOfferRequestBody);
  }

  @Post('ping')
  ping(@Body() pingRequest: PingRequest) {
    return this.cibilDetService.ping(pingRequest)
  }

  @Post('getCustomerAssets')
  getCustomerAssets(@Body() getCustomerAssetsRequest: GetCustomerAssetsRequest) {
    return this.cibilDetService.getCustomerAssets(getCustomerAssetsRequest)
  }

  @Post('getProductWebToken')
  getProductWebToken(@Body() getProductWebTokenRequest: GetProductWebTokenRequest) {
    return this.cibilDetService.getProductWebToken(getProductWebTokenRequest)
  }
}

