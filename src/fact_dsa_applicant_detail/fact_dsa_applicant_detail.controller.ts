import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { FactDsaApplicantDetailService } from './fact_dsa_applicant_detail.service';
import { UpdateFactDsaApplicantDetailDto } from './dto/update-fact_dsa_applicant_detail.dto';
import { FileInterceptor, FilesInterceptor,FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateFactDsaApplicantDetailDto } from './dto/create-fact_dsa_applicant_detail.dto';
import { CreateAadhaarOtpDto, CreateAadhaarXmlDto, CreateGmailOtpDto, CreateGmailotpVerifyDto, CreateOtpVerifyDto, CreatePancardDto, CreatePhoneOtpDto, ForgotPasswordVerifyDto } from './dto/otp_send_verify_dtp';

@Controller('fact_dsa_applicant_detail')
export class FactDsaApplicantDetailController {
  constructor(private readonly factDsaApplicantDetailService: FactDsaApplicantDetailService) {}

  @Post('create')
  create(@Body() createFactDsaApplicantDetailDto: CreateFactDsaApplicantDetailDto) {
    return this.factDsaApplicantDetailService.create(createFactDsaApplicantDetailDto);
  }

  @Post('findAll')
  findAll() {
    return this.factDsaApplicantDetailService.findAll();
  }
  @Post('findAllApplications')
  findAllApplications() {
    return this.factDsaApplicantDetailService.findAllApplications();
  }
  @Post('findOne')
  findOne(@Body('dsaApplicantId') dsaApplicantId: string) {
    return this.factDsaApplicantDetailService.findOne(dsaApplicantId);
  }

  @Post('login')
  login(@Body('mobileNumber') mobileNumber: string) {
    return this.factDsaApplicantDetailService.login(mobileNumber);
  }

  @Post('dsaSendPhoneOtp')
  dsaSendPhoneOtp(@Body() createPhoneOtpDto:CreatePhoneOtpDto) {
    return this.factDsaApplicantDetailService.dsaSendPhoneOtp(createPhoneOtpDto);
  }

  @Post('dsaVerifyPhoneOtp')
  dsaVerifyPhoneOtp(@Body() createOtpVerifyDto:CreateOtpVerifyDto) {
    return this.factDsaApplicantDetailService.dsaVerifyPhoneOtp(createOtpVerifyDto);
  }

  @Post('dsaSendGmailOtp')
  dsaSendGmailOtp(@Body() createGmailOtpDto:CreateGmailOtpDto) {
    return this.factDsaApplicantDetailService.dsaSendGmailOtp(createGmailOtpDto);
  }

  @Post('dsaVerifyGmailOtp')
  dsaVerifyGmailOtp(@Body() createGmailotpVerifyDto:CreateGmailotpVerifyDto) {
    return this.factDsaApplicantDetailService.dsaVerifyGmailOtp(createGmailotpVerifyDto);
  }


  @Post('aadharCardPopulate')
  aadharCardPopulate(@Body() createAadhaarOtpDto:CreateAadhaarOtpDto) {
    return this.factDsaApplicantDetailService.aadharCardPopulate(createAadhaarOtpDto);
  }

  @Post('aadharCardVerify')
  aadharCardVerify(@Body() createAadhaarXmlDto:CreateAadhaarXmlDto) {
    return this.factDsaApplicantDetailService.aadharCardVerify(createAadhaarXmlDto);
  }
  @Post('verifyPan')
  verifyPan(@Body() createPancardDto:CreatePancardDto) {
    return this.factDsaApplicantDetailService.verifyPan(createPancardDto);
  }


  @Post('getConsitutionType')
  getConsitutionType(){
    return this.factDsaApplicantDetailService.getConsitutionType();
  }

  @Post('getBranch')
  getBranch() {
    return this.factDsaApplicantDetailService.getBranch();
  }

  @Post('update')
  update( @Body() updateFactDsaApplicantDetailDto: UpdateFactDsaApplicantDetailDto) {
    return this.factDsaApplicantDetailService.update(updateFactDsaApplicantDetailDto);
  }


  @Post('getConstitutionType')
  getConstitutionType(){
    return this.factDsaApplicantDetailService.getConstitutionType()
  }

}
