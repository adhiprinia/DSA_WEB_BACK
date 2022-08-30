import { ApiProperty } from "@nestjs/swagger";

export class CreateFactDsaApplicantDetailDto {
    masterId:string;


    @ApiProperty()
    fullName:string;
    @ApiProperty()
    mobileNumber:string;
    mobileNumberOtp:string;
    mobileNumberOtpVerify:string;
    @ApiProperty()
    emailId:string;
    emailIdOtp:string;
    emailIdOtpVerify:string;
    @ApiProperty()
    partnerType:string;
    @ApiProperty()
    branch:string;
    @ApiProperty()
    pincode:string;
    @ApiProperty()
    constitutionType:string;
    @ApiProperty()
    applicantId:string;
    @ApiProperty()
    userId:string;
    @ApiProperty()
    dsaApplicantId:string;
        
    
    ///kyc details
    @ApiProperty()
    panNumber:string;
    @ApiProperty()
    ckyc:string;
    @ApiProperty()
    aadhaarCard:string;
    @ApiProperty()
    gstApplicable:string;
    @ApiProperty()
    gstNumberVerify:string;
    @ApiProperty()
    trinApplicable:string
    @ApiProperty()
    trinNumberVerify:string;
    @ApiProperty()
    msmeApplicable:string;
    @ApiProperty()
    msmeNumberVerify:string;
    @ApiProperty()
    legalDispute:string;
    @ApiProperty()
    applicantPhoto:string;

    ///personal details
    firstName:string;
    @ApiProperty()
    salutation:string;
    @ApiProperty()
    fathersName:string;
    @ApiProperty()
    mothersName:string;
    @ApiProperty()
    dateOfBirth:Date;
    @ApiProperty()
    gender:string;
    @ApiProperty()
    highestQualification:string;
    @ApiProperty()
    profession:string;
    @ApiProperty()
    dateOfIncorporation:Date;
    authoriseABHFL:string;
    
    cibilScore:string;
    cibilDateAndTime:string;
    ckycNumber:string;
    aadhaarVerify:string;
    panCard:string;
    factDsaApplicantDetailEntdBy:string;
    factDsaApplicantDetailEntdOn:Date;
}

