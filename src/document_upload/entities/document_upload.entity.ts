import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'dsa_upload_document_list'})
export class DocumentUpload {
    @PrimaryGeneratedColumn('uuid',{
        name:'dsa_upload_document_list_id'
    })
    documentUploadId:string;


    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string

    @Column({
        name:'document_type'
    })
    documentType:string

    @Column({
        name:'document_group'
    })
    documentGroup:string;
    
    @Column({
        name:'document_name'
    })
    documentName:string

    @Column({
        name:'constitution_type'
    })
    constitutionType:string

    @Column({
        name:'is_latest'
    })
    isLatest:string;

    @Column({
        name:'api_responce'
    })
    apiResponse:string;

    @Column({
        name:'isactive'
    })
    isactive:string

    @Column({
        name:'file'
    })
    file:string

    @Column({
        name:'upload_document_list_entd_by'
    })
    uploadDocumentListEntdBy:string;

    @Column({
        name:'upload_document_list_entd_on'
    })
    uploadDocumentListEntdOn:Date;

    @Column({
        name:'upload_document_list_mod_by'
    })
    uploadDocumentListModBy:string;

    @Column({
        name:'upload_document_list_mod_on'
    })
    uploadDocumentListModOn:Date;
    
    
}