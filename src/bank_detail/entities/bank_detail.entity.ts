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
        name:'ifsc_code',
        nullable:true
    })
    ifscCode:string;

    
    @Column({
        name:'account_number',
        nullable:true
    })
    accountNumber:string;

    @Column({
        name:'bank_name',
        nullable:true
    })
    bankName:string;

    @Column({
        name:'branch_name',
        nullable:true
    })
    branchName:string;

    @Column({
        name:'micr_number',
        nullable:true
    })
    micrNumber:string;

    @Column({
        name:'no_of_years_of_relationship_with_bank',
        nullable:true
    })
    noOfYearsOfRelationShipWithBank:string;

    
    @Column({
        name:'account_type',
        nullable:true
    })
    accountType:string;
    
    @Column({
        name:'account_holder',
        nullable:true
    })
    accountHolder:string;

    @Column({
        name:'bank_detail_entd_by',
        nullable:true
    })
    bankDetailEndtBy:string
  
    @Column({
        name:'bank_detail_entd_on',
        default: () => 'NOW()',
        nullable:true
    })
    bankDetailEndtOn:Date

    @Column({
        name:'bank_detail_mod_by',
        nullable:true
    })
    bankDetailModBy:string
  
    @Column({
        name:'bank_detail_mod_on',
        default: () => 'NOW()',
        nullable:true
    })
    bankDetailModOn:Date;
}
