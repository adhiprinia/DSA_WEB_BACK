import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDetailDto {
    @ApiProperty()
    readonly dsaApplicantId:string
    @ApiProperty()
    mobileNumber:string
    @ApiProperty()
    readonly addressLine1:string;
    @ApiProperty()
    readonly addressLine2:string;
    @ApiProperty()
    readonly pinCode:string;
    @ApiProperty()
    readonly area:string;
    @ApiProperty()
    readonly city:string;
    @ApiProperty()
    readonly district:string;
    @ApiProperty()
    readonly state:string;
    @ApiProperty()
    readonly country:string;
    @ApiProperty()
    landMark:string;
    @ApiProperty()
    readonly residentType:string;
    readonly addressType:string;
    readonly addressDetailEntdBy:string;
    readonly addressDetailEntdOn:Date
}
