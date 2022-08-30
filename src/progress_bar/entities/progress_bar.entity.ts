import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'dsa_progress_bar'
})
export class ProgressBar {
    @PrimaryGeneratedColumn({
        name:'progress_bar_id'
    })
    progressBarId:string;

    @Column({
        name:"button_tittle"
    })
    buttonTittle:string;

    @Column({
        name:'ui_level'
    })
    uiLevel:string

    @Column({
        name:'ui_component'
    })
    uiComponent:string

    @Column({
        name:'current_code'
    })
    currentCode:string

    @Column({
        name:'next_code'
    })
    nextCode:string

    @Column({
        name:'current_stage'
    })
    currentStage:string

    @Column({
        name:'next_stage'
    })
    nextStage:string

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
