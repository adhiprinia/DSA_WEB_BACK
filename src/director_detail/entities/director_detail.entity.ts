import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_director_details'
})
export class DirectorDetail {
    @PrimaryGeneratedColumn({
        name:'dsa_director_id'
    })
    dsaDirectorId:string;

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;

    @Column({
        name:'aadhaar_card'
    })
    aadhaarCard:string;

    @Column({
        name:'aadhaar_card_doc_upload'
    })
    aadhaarCardDocUpload:string;

    @Column({
        name:'pan_card'
    })
    panCard:string;

    @Column({
        name:'pan_card_doc_upload'
    })
    panCardDocUpload:string;

    @Column({
        name:'date_of_birth'
    })
    dateOfBirth:Date;

    @Column({
        name:'date_of_incorporation'
    })
    dateOfIncorporation:Date;


    @Column({
        name:'gender'
    })
    gender:string;

    @Column({
        name:'ckyc_number'
    })
    ckycNumber:string;

    @Column({
        name:'fathers_name'
    })
    fathersName:string

    @Column({
        name:'mothers_name'
    })
    mothersName:string

    @Column({
        name:'highest_qualification'
    })
    highestQualification:string;
    
    @Column({
        name:'profession'
    })
    profession:string

    @Column({
        name:'salutation'
    })
    salutation:string

    @Column({
        name:'status'
    })
    status:string
    @Column({
        name:'full_name'
    })
    fullName:string

    @BeforeInsert()
    beforeInsertActions() {
      this.status = "Active";
    }

    @Column({
        name:'isactive'
    })
    isActive:boolean
    @BeforeInsert()
    beforeInsertCurrentCode(){
        this.isActive = true;
    }    


    @Column({
        name:'director_type'
    })
    directorType:string

}