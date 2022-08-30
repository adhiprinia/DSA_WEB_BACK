import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'dsa_address_details'})
export class AddressDetail {
    @PrimaryGeneratedColumn('uuid',{
        name:'address_detail_id'
    })
    addressDetailId:string;

    @Column({
        name:'status_code'
    })
    statusCode:string
    
    @Column({
        name:'status_name'
    })
    statusName:string

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string

    @Column({
        name:'address_line1'
    })
    addressLine1:string;

    @Column({
        name:'address_line2'
    })
    addressLine2:string;

    @Column({
        name:'pin_code'
    })
    pinCode:string;

    @Column({
        name:'area'
    })
    area:string;

    @Column({
        name:'city'
    })
    city:string;

    @Column({
        name:'district'
    })
    district:string;

    @Column({
        name:'state'
    })
    state:string;

    @Column({
        name:'country'
    })
    country:string;

    
    @Column({
        name:'land_mark'
    })
    landMark:string;

    @Column({
        name:'resident_type'
    })
    residentType:string;

    @Column({
        name:'address_type'
    })
    addressType:string;

    @Column({
        name:'address_deatail_entd_by'
    })
    addressDetailEntdBy:string;
   
    @Column({
        name:'address_detail_entd_on',
        default:()=>'NOW'
    })
    addressDetailEntdOn:Date;
    
    @Column({
        name:'address_detail_mod_by'
    })
    addressDetailModBy:string;
    
    @Column({
        name:'address_detail_mod_on',
        default:()=>'NOW'
    })
    addressDetailModOn:Date;

}
