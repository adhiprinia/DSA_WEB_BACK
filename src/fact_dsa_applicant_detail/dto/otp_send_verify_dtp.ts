import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreatePhoneOtpDto {
    readonly phoneno:string;
    readonly otp:string;
 }
export class CreateOtpVerifyDto {
    readonly phoneno:string;
    readonly otp:string;
    readonly result:string;
 }

 export class CreateGmailOtpDto {
    dsaApplicantId:string
    readonly email:string;
    readonly name:string;
    readonly otp:string;
    readonly request_id:string;
}
export class ForgotPasswordDto{
    @IsEmail()
    email : string;
    @IsString()
    name : string;
}
export class ForgotPasswordVerifyDto{
    @IsEmail()
    email : string;
    @IsNumber()
    otp : string;
}

export class CreateGmailotpVerifyDto {
    dsaApplicantId:string

    otp:string;
    
    email:string;
}

export class CreateAadhaarXmlDto {
    requestId:string;
    otp:string;
    consent:string;
    applicantPersonalDetailId:string;
    masterId:string;
    applicantId:string;
    applicantType:string;
    dsaApplicantId:string;
    mobileNumber:string;
    aadhaarNo:string
}

export class CreateAadhaarOtpDto {
    // consent: String;
    aadhaarNo: String;
    
}

export class CreatePancardDto {
     
    readonly  pan: String;
    readonly dob:string;
}
 

