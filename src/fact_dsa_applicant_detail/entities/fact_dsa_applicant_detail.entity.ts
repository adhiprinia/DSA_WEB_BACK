import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'fact_dsa_applicant_details'
})
export class FactDsaApplicantDetail {
    @PrimaryGeneratedColumn('uuid',{
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;

     ///basic detail table
     @Column({
        name: 'full_name'
    })
    fullName: string;

    @Column({
        name: 'mobile_number'
    })
    mobileNumber: string;

    // @Column({
    //     name:'mobile_number_otp',
    // })
    // mobileNumberOtp:string;

    @Column({
        name: 'mobile_number_otp_verify',
    })
    mobileNumberOtpVerify: string;

    @Column({
        name: 'email_id',
    })
    emailId: string;

    @Column({
        name: 'email_id_otp',
    })
    emailIdOtp: string;

    @Column({
        name: 'email_id_otp_verify',
    })
    emailIdOtpVerify: string;

    @Column({
        name: 'partner_type'
    })
    partnerType: string;

    @Column({
        name: 'branch'
    })
    branch: string;

    @Column({
        name: 'pin_code'
    })
    pincode: string;

    @Column({
        name: 'constitution_type'
    })
    constitutionType: string;

    ///kyc details

    @Column({
        name: 'pan_number'
    })
    panCard: string;

    @Column({
        name: 'aadhaar_card'
    })
    aadhaarCard: string;
    
    @Column({
        name: 'ckyc_number'
    })
    ckycNumber: string;

    
        // @Column({
        //     name:'ckyc'
        // })
        // ckyc:string;
    // @Column({
    //     name:'pan_number'
    // })
    // panNumber:string;

    
    // @Column({
    //     name:'aadhaar_verify'
    // })
    // aadhaarVerify:string;

    
    @Column({
        name:'status_name'
    })
    ezflowStatus:string;

    @Column({
        name: 'gst_applicable'
    })
    gstApplicable: string;

    @Column({
        name: 'gst_number_verify'
    })
    gstNumberVerify: string;

    @Column({
        name: 'trin_applicable'
    })
    trinApplicable: string;

    @Column({
        name: 'trin_number_verify'
    })
    trinNumberVerify: string;

    @Column({
        name: 'msme_applicable'
    })
    msmeApplicable: string;

    @Column({
        name: 'msme_number_verify'
    })
    msmeNumberVerify: string;

    @Column({
        name: 'legal_dispute'
    })
    legalDispute: string

    @Column({
        name: 'applicant_photo'
    })
    applicantPhoto: string

   ///personal details

    @Column({
        name: 'salutation'
    })
    salutation: string;

    @Column({
        name: 'fathers_name'
    })
    fathersName: string;

    @Column({
        name: 'mothers_name'
    })
    mothersName: string;

    @Column({
        name: 'date_of_birth'
    })
    dateOfBirth: Date;

    @Column({
        name: 'date_of_incorporation'
    })
    dateOfIncorporation: Date;

    @Column({
        name: 'gender'
    })
    gender: string;

    @Column({
        name: 'highest_qualification'
    })
    highestQualification: string;

    @Column({
        name: 'profession'
    })
    profession: string;

    @Column({
        name: 'authorise_abhlfl'
    })
    authoriseABHFL: string;



    @Column({
        name: 'cibil_score'
    })
    cibilScore: string;

    @Column({
        name: 'cibil_requested_date_and_time'
    })
    cibilDateAndTime: string;

    @Column({
        name: 'apllicant_details_entd_by'
    })
    factDsaApplicantDetailEntdBy: string;

    @Column({
        name: 'apllicant_details_entd_on',
        default: () => 'NOW'
    })
    factDsaApplicantDetailEntdOn: Date;

    @Column({
        name: 'apllicant_details_mod_by'
    })
    factDsaApplicantDetailModBy: string;

    @Column({
        name: 'apllicant_details_mod_on',
        default: () => 'NOW'
    })
    factDsaApplicantDetailModOn: Date;

    @Column({
        name:'applicant_id'
    })
    applicantId:string;


    @Column({
        name:'user_id'
    })
    userId:string
    
    @Column({
        name:'isactive',
        default:()=>true
    })
    factDsaApplicantDetailisActive:boolean;

}
