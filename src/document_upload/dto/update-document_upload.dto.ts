import { PartialType } from '@nestjs/swagger';
import { CreateDocumentUploadDto } from './create-document_upload.dto';

export class UpdateDocumentUploadDto extends PartialType(CreateDocumentUploadDto) {
    dsaApplicantId:string;
    documentUploadId:string
    documentUploadModBy:string;
    documentUploadModOn:Date
}
