import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'dsa_address_details'})
export class AddressDetail {
    @PrimaryGeneratedColumn('uuid',{
        name:'address_detail_id'
    })
    addressDetailId:string;

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string

    @Column({
        name:'address_line1',
        nullable:true
    })
    addressLine1:string;

    @Column({
        name:'address_line2',
        nullable:true
    })
    addressLine2:string;

    @Column({
        name:'pin_code',
        nullable:true
    })
    pinCode:string;

    @Column({
        name:'area',
        nullable:true
    })
    area:string;

    @Column({
        name:'city',
        nullable:true
    })
    city:string;

    @Column({
        name:'district',
        nullable:true
    })
    district:string;

    @Column({
        name:'state',
        nullable:true
    })
    state:string;

    @Column({
        name:'country',
        nullable:true
    })
    country:string;

    
    @Column({
        name:'land_mark'
    })
    landMark:string;

    @Column({
        name:'resident_type',
        nullable:true
    })
    residentType:string;

    @Column({
        name:'address_type',
        nullable:true
    })
    addressType:string;

    @Column({
        name:'address_deatail_entd_by',
        nullable:true
    })
    addressDetailEntdBy:string;
   
    @Column({
        name:'address_detail_entd_on',
        default:()=>'NOW()',
        nullable:true
    })
    addressDetailEntdOn:Date;
    
    @Column({
        name:'address_detail_mod_by',
        nullable:true
    })
    addressDetailModBy:string;
    
    @Column({
        name:'address_detail_mod_on',
        default:()=>'NOW()',
        nullable:true
    })
    addressDetailModOn:Date;

}
