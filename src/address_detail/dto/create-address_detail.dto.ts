export class CreateAddressDetailDto {
    readonly dsaApplicantId:string
    mobileNumber:string
    readonly addressLine1:string;
    readonly addressLine2:string;
    readonly pinCode:string;
    readonly area:string;
    readonly city:string;
    readonly district:string;
    readonly state:string;
    readonly country:string;
    landMark:string;
    statusName:string;
    statusCode:string;
    readonly residentType:string;
    readonly addressType:string;
    readonly addressDetailEntdBy:string;
    readonly addressDetailEntdOn:Date
}
