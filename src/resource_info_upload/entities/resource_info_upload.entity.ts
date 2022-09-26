import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_resource'
})
export class ResourceInfoUpload {
    @PrimaryGeneratedColumn({
        name:'dsa_resource_id'
    })
    dsaResourceId:string;

    @Column({
        name:'category_type'
    })
    category_type:string;

    @Column({
        name:'category_name'
    })
    category_name:string;
    

    @Column({
        name:'category_description'
    })
    category_description:string;

    @Column({
        name:'category_image'
    })
    category_image:string;

    @Column({
        name:'category_content'
    })
    category_content:string;

    @Column({
        name:'category_document_type'
    })
    category_document_type:string

    @Column({
        name:'category_supported_english'
    })
    category_supported_english:string

    @Column({
        name:'category_supported_hindi'
    })
    category_supported_hindi:string

    @Column({
        name:'course'
    })
    course:string;

    @Column({
        name:'course_start_date'
    })
    course_start_date:Date;

    @Column({
        name:'course_end_date'
    })
    course_end_date:Date;

    @Column({
        name:'course_code'
    })
    courseCode:string;

    

    // @Column({
    //     name:'file_upload'
    // })
    // fileUpload:string;

    // @Column({
    //     name:'image_upload'
    // })
    // imageUpload:string;

    // @Column({
    //     name:'video_upload'
    // })
    // videoUpload:String;
}
