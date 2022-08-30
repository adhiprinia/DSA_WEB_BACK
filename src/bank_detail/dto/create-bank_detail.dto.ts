import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateBankDetailDto {
    readonly cancelledCheque:string;
    dsaApplicantId:string;
    @ApiProperty() 
    @IsNotEmpty()
    readonly ifscCode:string;
    @ApiProperty() 
    @IsNotEmpty()
    readonly accountNumber:string;
    @ApiProperty() 
    @IsNotEmpty()
    readonly bankName:string;
    readonly branchName:string;
    readonly micrNumber:string
    readonly noOfYearsOfRelationShipWithBank:string;
    @ApiProperty() 
    @IsNotEmpty()
    readonly accountType:string;
    readonly accountHolder:string;
    readonly bankDetailEndtBy:string;
    readonly bankDetailEndtOn:Date;

}
