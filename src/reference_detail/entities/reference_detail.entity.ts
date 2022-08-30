import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'dsa_reference_details'})
export class ReferenceDetail {
    @PrimaryGeneratedColumn('uuid',{
        name:'reference_detail_id'
    })
    referenceDetailId:string;

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;

    @Column({
        name:'status_code'
    })
    statusCode:string
    
    @Column({
        name:'status_name'
    })
    statusName:string

    @Column({
        name:'name'
    })
    name:string

    @Column({
        name:'relationship_with_applicant'
    })
    relationshipWithApplicant:string

    @Column({
        name:'mobile_no'
    })
    mobileNo:string

    @Column({
        name:'knowning_since'
    })
    knowningSince:string

    @Column({
        name:'address_line1'
    })
    addressLine1:string

    @Column({
        name:'address_line2'
    })
    addressLine2:string

    @Column({
        name:'land_mark'
    })
    landmark:string

    @Column({
        name:'pin_code'
    })
    pincode:String

    @Column({
        name:'area'
    })
    area:string;

    @Column({
        name:'post_office'
    })
    postOffice:string;

    @Column({
        name:'city'
    })
    city:string

    @Column({
        name:'district'
    })
    district:string

    @Column({
        name:'state'
    })
    state:string;

    @Column({
        name:'country'
    })
    country:string

    @Column({
        name:'reference_details_entd_by'
    })
    referenceDetailEntdBy:string

    @Column({
        name:'reference_details_entd_on',
        default:()=>'NOW'
    })
    referenceDetailEntdOn:string

    @Column({
        name:'reference_details_mod_by'
    })
    referenceDetailModBy:string

    @Column({
        name:'reference_details_mod_on',
        default:()=>'NOW'
    })
    referenceDetailModOn:string
}