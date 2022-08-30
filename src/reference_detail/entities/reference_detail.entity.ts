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
        name:'relationship_with_applicant',
        nullable:true
    })
    relationshipWithApplicant:string

    @Column({
        name:'mobile_no',
        nullable:true
    })
    mobileNo:string

    @Column({
        name:'knowning_since',
        nullable:true
    })
    knowningSince:string

    @Column({
        name:'address_line1',
        nullable:true
    })
    addressLine1:string

    @Column({
        name:'address_line2',
        nullable:true
    })
    addressLine2:string

    @Column({
        name:'land_mark',
        nullable:true
    })
    landmark:string

    @Column({
        name:'pin_code',
        nullable:true
    })
    pincode:String

    @Column({
        name:'area',
        nullable:true
    })
    area:string;

    @Column({
        name:'post_office',
        nullable:true
    })
    postOffice:string;

    @Column({
        name:'city',
        nullable:true
    })
    city:string

    @Column({
        name:'district',
        nullable:true
    })
    district:string

    @Column({
        name:'state',
        nullable:true
    })
    state:string;

    @Column({
        name:'country',
        nullable:true
    })
    country:string

    @Column({
        name:'reference_details_entd_by',
        nullable:true
    })
    referenceDetailEntdBy:string

    @Column({
        name:'reference_details_entd_on',
        default:()=>'NOW()',
        nullable:true
    })
    referenceDetailEntdOn:string

    @Column({
        name:'reference_details_mod_by',
        nullable:true
    })
    referenceDetailModBy:string

    @Column({
        name:'reference_details_mod_on',
        default:()=>'NOW()',
        nullable:true
    })
    referenceDetailModOn:string
}