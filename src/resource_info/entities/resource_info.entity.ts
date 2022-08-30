import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_resource_info'
})
export class ResourceInfo {

    @PrimaryGeneratedColumn({
        name:'dsa_resource_id'
    })
    dsaResourceId:string;

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;
      
    @Column({
        name:'resource_id'
    })
    resourceId:string;

    @Column({
        name:'category_type'
    })
    categoryType:string;

    @Column({
        name:'category_name'
    })
    categoryName:string;

    @Column({
        name:'category_description'
    })
    categoryDescription:string;

    @Column({
        name:'category_image'
    })
    categoryImage:string;

    @Column({
        name:'category_content'
    })
    categoryContent:string;
 
    @Column({
        name:'category_document_type'
    })
    categoryDocumentType:string;
    
    @Column({
        name:'category_supported_english'
    })
    categorySupportedEnglish:string;

    @Column({
        name:'category_supported_hindi'
    })
    categorySupportedHindi:string;

    @Column({
        name:'parent_id'
    })
    parentId:string;

    @Column({
        name:'level'
    })
    level:string;

    @Column({
        name:'resource_is_status'
    })
    resourceIsStatus:string;

    @Column({
        name:'course'
    })
    course:string;

    @Column({
        name:'child_id'
    })
    childId:string;

    @Column({
        name:'complete'
    })
    complete:string;

    // @Column({
    //     name:'salutation'
    // })
    // salutation:string


    @Column({
        name:'dsa_resource_info_entd_by'
    })
    dsaResourceInfoEntdBy:string;

    @Column({
        name:'dsa_resource_info_entd_on'
    })
    dsaResourceInfoEntdOn:Date;

    @Column({
        name:'dsa_resource_info_mod_by'
    })
    dsaResourceInfoModBy:string;

    @Column({
        name:'dsa_resource_info_mod_on'
    })
    dsaResourceInfoModOn:Date;


}
