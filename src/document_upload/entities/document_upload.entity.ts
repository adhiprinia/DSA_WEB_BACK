import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'dsa_upload_document'})
export class DocumentUpload {
    @PrimaryGeneratedColumn('uuid',{
        name:'upload_document_id'
    })
    documentUploadId:string;


    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string

    @Column({
        name:'pan_of_authorised_signatory'
    })
    panOfAuthorisedSignatory:string;

    @Column({
        name:'address_proof_of_authorised_signatory'
    })
    addressProofOfAuthorisedSignatory:string;

    @Column({
        name:'list_of_directors'
    })
    listOfDirectors:string;

    @Column({
        name:'address_proof'
    })
    addressProof:string;

    @Column({
        name:'passport_size_photo'
    })
    passportSizePhoto:string;

    @Column({
        name:'latest_it_return'
    })
    latestItReturn:string;

    @Column({
        name:'bank_statement'
    })
    bankStatement:string;

    @Column({
        name:'enrolment_letter'
    })
    enrolmentLetter:string;

    @Column({
        name:'gst_certificate'
    })
    gstCertificate:string;

    @Column({
        name:'incorporation_documents'
    })
    incorporationDocuments:string;

    @Column({
        name:'board_resolution'
    })
    boardResolution:string;



    @Column({
        name:'rcu_report'
    })
    rcuReport:string;

    @Column({
        name:'dnd_certificate'
    })
    dndCertificate:string;

    @Column({
        name:'msme_registration'
    })
    msmeRegistration:string;

    @Column({
        name:'attendance_sheet'
    })
    attendanceSheet:string;

    @Column({
        name:'relation_party_checks'
    })
    relatedPartyChecks:string;

    @Column({
        name:'document_upload_entd_by'
    })
    documentUploadEntdBy:string;

    @Column({
        name:'document_upload_entd_on'
    })
    documentUploadEntdOn:Date;

    @Column({
        name:'document_upload_mod_by'
    })
    documentUploadModBy:string;

    @Column({
        name:'document_upload_mod_on'
    })
    documentUploadModOn:Date;
    
    
}