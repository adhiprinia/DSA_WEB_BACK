import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'check_point'})
export class CheckPoint {

    @PrimaryGeneratedColumn({
        name:'check_point_id'
    })
    checkPointId:string;
    
    @Column({
        name:'pan_proof'
    })
    panProof:string;

    @Column({
        name:'partners_proof'
    })
    partnersProof:string;

    @Column({
        name:'address_proof'
    })
    addressProof:string;

    @Column({
        name:'passport_size_photo'
    })
    passportSizePhoto:string;

    @Column({
        name:'it_return'
    })
    itReturn:string;

    @Column({
        name:'bank_statement'
    })
    bankStatement:string;

    @Column({
        name:'enrolment_letter'
    })
    enrolmentLetter:string;

    @Column({
        name:'gst_registration'
    })
    gstRegistration:string;

    @Column({
        name:'incorporation_document'
    })
    incorporationDocument:string;

    @Column({
        name:'board_resolution'
    })
    boardResolution:string;

    @Column({
        name:'cancelled_chq_copy'
    })
    cancelledChqCopy:string;

    @Column({
        name:'check_point_entd_by'
    })
    checkPointEntdBy:string;

    @Column({
        name:'check_point_entd_on',
        default:()=>'NOW'
    })
    checkPointEntdOn:string;

    @Column({
        name:'check_point_mod_by'
    })
    checkPointModBy:string;

    @Column({
        name:'check_point_mod_on',
        default:()=>'NOW'
    })
    checkPointModOn:string;

}
