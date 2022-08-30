import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_progress_bar'
})
export class ProgressBar {
    @PrimaryGeneratedColumn({
        name:'progress_bar_id'
    })
    progressBarId:string;

    @Column({
        name:'dsa_applicant_id'
    })
    dsaApplicantId:string;

    @Column({
        name:'progress_bar_count'
    })
    progressBarCount:string;

    @Column({
        name:'mobile_number'
    })
    mobileNumber:string;

    @Column({
        name:'progress_bar_entd_on'
    })
    progressBarEntdBy:string;

    @Column({
        name:'progress_bar_entd_by'
    })
    progressBarEntdOn:string;

    @Column({
        name:'progress_bar_mod_on'
    })
    progressBarModOn:Date;

    @Column({
        name:'progress_bar_mod_by'
    })
    progressBarModBy:string;
}
