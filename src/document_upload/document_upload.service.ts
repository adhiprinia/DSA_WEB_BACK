import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { baseUrl } from 'src/localUrl/Url';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDocumentUploadDto } from './dto/create-document_upload.dto';
import { FindOneDocumentUpload } from './dto/findone-document_upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document_upload.dto';
import { DocumentUpload } from './entities/document_upload.entity';

@Injectable()
export class DocumentUploadService {
  constructor(@InjectRepository(DocumentUpload)private documentUploadRepository:Repository<DocumentUpload>){}


  async create(createDocumentUploadDto: CreateDocumentUploadDto):Promise<ApiResponse<DocumentUpload>> {
    let document_upload = new DocumentUpload()
    // document_upload.panOfAuthorisedSignatory = createDocumentUploadDto.panOfAuthorisedSignatory
    // document_upload.addressProofOfAuthorisedSignatory = createDocumentUploadDto.addressProofOfAuthorisedSignatory
    // document_upload.listOfDirectors = createDocumentUploadDto.listOfDirectors
    // document_upload.addressProof = createDocumentUploadDto.addressProof
    // document_upload.passportSizePhoto = createDocumentUploadDto.passportSizePhoto
    // document_upload.latestItReturn = createDocumentUploadDto.latestItReturn
    // document_upload.bankStatement = createDocumentUploadDto.bankStatement
    // document_upload.enrolmentLetter = createDocumentUploadDto.enrolmentLetter
    // document_upload.gstCertificate = createDocumentUploadDto.gstCertificate
    // document_upload.incorporationDocuments = createDocumentUploadDto.incorporationDocuments
    // document_upload.boardResolution = createDocumentUploadDto.boardResolution
    // document_upload.rcuReport = createDocumentUploadDto.rcuReport
    // document_upload.dndCertificate = createDocumentUploadDto.dndCertificate
    // document_upload.msmeRegistration = createDocumentUploadDto.msmeRegistration
    // document_upload.attendanceSheet = createDocumentUploadDto.attendanceSheet
    // document_upload.relatedPartyChecks = createDocumentUploadDto.relatedPartyChecks
    // document_upload.documentUploadEntdBy = createDocumentUploadDto.documentUploadEntdBy
    // document_upload.documentUploadEntdOn = createDocumentUploadDto.documentUploadEntdOn
    let saved_document_upload = await this.documentUploadRepository.save(document_upload)
    let response: ApiResponse<DocumentUpload> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_document_upload
    };
    return response;
  }

  async findAll():Promise<ApiResponse<DocumentUpload[]>> {
    let document_upload_result = await this.documentUploadRepository.find()
    let responsData = [];
    responsData.push({
      "document_upload_result":document_upload_result,
      "totalCount":document_upload_result.length,
    });
    let response: ApiResponse<DocumentUpload[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findOne( findOneDocumentUpload: FindOneDocumentUpload): Promise<ApiResponse<DocumentUpload>> {
    let document_upload_result = await this.documentUploadRepository.findOne({ where: { dsaApplicantId: findOneDocumentUpload.dsaApplicantId,documentType:findOneDocumentUpload.documentType} });
    let response: ApiResponse<DocumentUpload>;
    if (document_upload_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: document_upload_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }



  async update(updateDocumentUploadDto: UpdateDocumentUploadDto): Promise<ApiResponse<DocumentUpload>> {
    
    let document_upload_result = await this.documentUploadRepository.findOne({ where: { dsaApplicantId: updateDocumentUploadDto.dsaApplicantId,documentType:updateDocumentUploadDto.documentType } });
    let document_upload_data = { ...document_upload_result, ...updateDocumentUploadDto };
    document_upload_data.file = updateDocumentUploadDto.file

     this.documentUploadRepository.save(document_upload_data);
    let response: ApiResponse<DocumentUpload> = {
      status: ApiResponseStatus.SUCCESS,
      // data: updated_document_upload_data
    };
    return response;
  }

}
