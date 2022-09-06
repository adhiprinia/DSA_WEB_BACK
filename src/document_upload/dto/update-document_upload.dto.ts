import { PartialType } from '@nestjs/swagger';
import { CreateDocumentUploadDto } from './create-document_upload.dto';

export class UpdateDocumentUploadDto extends PartialType(CreateDocumentUploadDto) {
    dsaApplicantId:string;
    documentType:string;
    documentUploadId:string
    uploadDocumentListModBy:string;
    uploadDocumentListModOn:Date
}
