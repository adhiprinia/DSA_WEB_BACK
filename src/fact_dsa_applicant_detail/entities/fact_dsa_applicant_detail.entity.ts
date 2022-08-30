import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'fact_dsa_applicant_details'
})
export class FactDsaApplicantDetail {
    @PrimaryGeneratedColumn({
        name: 'dsa_applicant_id'
    })
    dsaApplicantId: string;

    // @Column({
    //     name:'master_Id',
    //     nullable:true
    // })
    // masterId:string;
    @Column({
        name: 'applicant_id',
        nullable: true
    })
    applicantId: string;

    @Column({
        name: 'salutation',
        nullable: true
    })
    salutation: string;

    @Column({
        name: 'user_id',
        nullable: true
    })
    userId: string

    @Column({
        name: 'full_name',
        nullable: true
    })
    fullName: string;

    @Column({
        name: 'fathers_name',
        nullable: true
    })
    fathersName: string;

    @Column({
        name: 'mothers_name',
        nullable: true
    })
    mothersName: string;

    @Column({
        name: 'date_of_birth',
        nullable: true
    })
    dateOfBirth: Date;

    @Column({
        name: 'date_of_incorporation',
        nullable: true
    })
    dateOfIncorporation: Date;

    @Column({
        name: 'gender',
        nullable: true
    })
    gender: string;

    @Column({
        name: 'highest_qualification',
        nullable: true
    })
    highestQualification: string;

    @Column({
        name: 'profession',
        nullable: true
    })
    profession: string;

    // @Column({
    //     name:'pan_number'
    // })
    // panNumber:string;

    // @Column({
    //     name:'ckyc'
    // })
    // ckyc:string;

    @Column({
        name: 'aadhaar_card',
        nullable: true
    })
    aadhaarCard: string;

    // @Column({
    //     name:'aadhaar_card_verify'
    // })
    // aadhaarCardVrify:string;



    @Column({
        name: 'mobile_number',
        nullable: true
    })
    mobileNumber: string;

    // @Column({
    //     name:'mobile_number_otp',
    // })
    // mobileNumberOtp:string;

    @Column({
        name: 'mobile_number_otp_verify',
        // unique: true,
        nullable: true
    })
    mobileNumberOtpVerify: string;

    @Column({
        name: 'email_id',
        // unique: true,
        nullable: true
    })
    emailId: string;

    @Column({
        name: 'email_id_otp',
        // unique: true,
        nullable: true
    })
    emailIdOtp: string;

    @Column({
        name: 'email_id_otp_verify',
        // unique: true,
        nullable: true
    })
    emailIdOtpVerify: string;

    @Column({
        name: 'partner_type',
        nullable: true
    })
    partnerType: string;

    @Column({
        name: 'branch',
        nullable: true
    })
    branch: string;

    @Column({
        name: 'pin_code',
        nullable: true
    })
    pincode: string;

    @Column({
        name: 'constitution_type',
        nullable: true
    })
    constitutionType: string;

    @Column({
        name: 'authorise_abhlfl',
        nullable: true
    })
    authoriseABHFL: string;

    @Column({
        name: 'cibil_score',
        nullable: true
    })
    cibilScore: string;

    @Column({
        name: 'cibil_requested_date_and_time',
        nullable: true
    })
    cibilDateAndTime: string;

    @Column({
        name:'pan_number'
    })
    panCard:string;

    @Column({
        name: 'ckyc_number',
        nullable: true
    })
    ckycNumber: string;

    // @Column({
    //     name:'aadhaar_card_verify'
    // })
    // aadhaarVerify:string;

    @Column({
        name: 'gst_applicable',
        nullable: true
    })
    gstApplicable: string;

    @Column({
        name: 'gst_number_verify',
        nullable: true
    })
    gstNumberVerify: string;

    @Column({
        name: 'trin_applicable',
        nullable: true
    })
    trinApplicable: string;

    @Column({
        name: 'trin_number_verify',
        nullable: true
    })
    trinNumberVerify: string;

    @Column({
        name: 'msme_applicable',
        nullable: true
    })
    msmeApplicable: string;

    @Column({
        name: 'msme_number_verify',
        nullable: true
    })
    msmeNumberVerify: string;

    @Column({
        name: 'legal_dispute',
        nullable: true
    })
    legalDispute: string

    @Column({
        name:'applicant_photo'
    })
    applicantPhoto:string

    @Column({
        name:'code'
    })
    code:string;

    @Column({
        name:'status_code'
    })
    statusCode:string;

    @Column({
        name:'status_name'
    })
    statusName:string;

    @Column({
        name:'button_tittle'
    })
    buttonTittle:string

    @Column({
        name:'ui_component'
    })
    uiComponent:string

    @Column({
        name:'ui_level'
    })
    uiLevel:string

    @Column({
        name:"status"
    })
    status:string;

    @Column({
        name:'stage'
    })
    stage:string

    @Column({
        name:'apllicant_details_entd_by'
    })
    factDsaApplicantDetailEntdBy: string;

    @Column({
        name: 'apllicant_details_entd_on',
        default: () => 'NOW()',
        nullable: true
    })
    factDsaApplicantDetailEntdOn: Date;

    @Column({
        name: 'apllicant_details_mod_by',
        nullable: true
    })
    factDsaApplicantDetailModBy: string;

    @Column({
        name: 'apllicant_details_mod_on',
        default: () => 'NOW()',
        nullable: true
    })
    factDsaApplicantDetailModOn: Date;



}
