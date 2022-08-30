import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_applicant_status'
})
export class ApplicationStatus {
    @PrimaryGeneratedColumn({
        name:'dsa_applicantion_id'
    })
    dsaApplicationId:string;

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;

    @Column({
        name:'status_code'
    })
    statusCode:string;

    @Column({
        name:'status_name'
    })
    statusName:string;

    @Column({
        name:'applicantion_entd_by'
    })
    applicantionDetailEntdBy:string;

    @Column({
        name:'applicantion_entd_on'
    })
    applicantionDetailEntdOn:Date;

    @Column({
        name:'applicantion_mod_by'
    })
    applicantionDetailModBy:string;

    @Column({
        name:'applicantion_mod_on'
    })
    applicantionDetailModOn:Date;

}
