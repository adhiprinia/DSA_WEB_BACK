import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_bank_details'
})
export class BankDetail {
    @PrimaryGeneratedColumn('uuid',{
        name:'bank_detail_id'
    })
    bankDetailId:string

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;
    
    @Column({
        name:'cancelled_cheque'
    })
    cancelledCheque:string;
    @Column({
        name:'ifsc_code'
    })
    ifscCode:string;

    
    @Column({
        name:'account_number'
    })
    accountNumber:string;

    @Column({
        name:'bank_name'
    })
    bankName:string;

    @Column({
        name:'branch_name'
    })
    branchName:string;

    @Column({
        name:'micr_number'
    })
    micrNumber:string;

    @Column({
        name:'no_of_years_of_relationship_with_bank'
    })
    noOfYearsOfRelationShipWithBank:string;

    
    @Column({
        name:'account_type'
    })
    accountType:string;
    
    @Column({
        name:'account_holder'
    })
    accountHolder:string;

    @Column({
        name:'bank_detail_entd_by'
    })
    bankDetailEndtBy:string
  
    @Column({
        name:'bank_detail_entd_on',
        default: () => 'NOW()'
    })
    bankDetailEndtOn:Date

    @Column({
        name:'bank_detail_mod_by'
    })
    bankDetailModBy:string
  
    @Column({
        name:'bank_detail_mod_on',
        default: () => 'NOW()'
    })
    bankDetailModOn:Date;
}
