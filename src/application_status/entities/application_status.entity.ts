import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_application_status'
})
export class ApplicationStatus {
    @PrimaryGeneratedColumn({
        name:'dsa_application_id'
    })
    dsaApplicationId:string;

    @Column({
        name: 'dsa_applicant_id'
    })
    dsaApplicantId: string;

    @Column({
        name:"button_tittle"
    })
    buttonTittle:string;
    @BeforeInsert()
    beforeInsertButtonTittle(){
        this.buttonTittle = "Start Registration";
    }

    @Column({
        name:'ui_level'
    })
    uiLevel:string
    @BeforeInsert()
    beforeInsertUiLevel(){
        this.uiLevel = "0";
    }

    @Column({
        name:'ui_component'
    })
    uiComponent:string
    @BeforeInsert()
    beforeInsertUiComponent(){
        this.uiComponent = "plus";
    }

    @Column({
        name:'current_code'
    })
    currentCode:string
    @BeforeInsert()
    beforeInsertCurrentCode(){
        this.currentCode = "0";
    }

    @Column({
        name:'current_stage'
    })
    currentStage:string
    @BeforeInsert()
    beforeInsertCurrentStage(){
        this.currentStage = "Basic Details";
    }

    @Column({
        name:'next_stage'
    })
    nextStage:string
    @BeforeInsert()
    beforeInsertNextStage(){
        this.nextStage = "Kyc Details";
    }

    @Column({
        name:'previous_stage'
    })
    previousStage:string

    @Column({
        name:'status_code'
    })
    statusCode:string

    @Column({
        name:'status_name'
    })
    statusName:string

    @Column({
        name:'application_details_entd_by'
    })
    applicantionDetailEntdBy:string;

    @Column({
        name:'application_details_entd_on'
    })
    applicantionDetailEntdOn:Date;

    @Column({
        name:'application_details_mod_by'
    })
    applicantionDetailModBy:string;

    @Column({
        name:'application_details_mod_on'
    })
    applicantionDetailModOn:Date;

}
