export class CreateDocumentUploadDto {
    readonly dsaApplicantId:string;
    documentType:string
    readonly documentGroup:string;
    readonly documentName:string;
    readonly constitutionType:string;
    readonly isLatest:string;
    readonly apiResponse:string;
    readonly isactive:string;
    readonly file:string;
    readonly uploadDocumentListEntdBy:string;
    readonly uploadDocumentListEntdOn:Date
}
