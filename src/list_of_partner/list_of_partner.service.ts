import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationStatus } from 'src/application_status/entities/application_status.entity';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListOfPartnerService {
    constructor(@InjectRepository(FactDsaApplicantDetail) private factDsaApplicantDetailRepository: Repository<FactDsaApplicantDetail>,
        @InjectRepository(ApplicationStatus) private applicationStatusRepository: Repository<ApplicationStatus>) { }


    async listOfPartnerLead() {
        let get_dsa_applicant_id = await this.applicationStatusRepository.find()
        let filter_code = []
        get_dsa_applicant_id.forEach((currentCode) => {
            if (currentCode.currentCode > '0' && currentCode.currentCode < "9") {
                filter_code.push(currentCode.dsaApplicantId);
            }
        })

        let responseData = [];
        let response: ApiResponse<FactDsaApplicantDetail>;

        for (let dsaApplicantId of filter_code) {
            let list_of_partner_lead = await this.factDsaApplicantDetailRepository.find({ where: { dsaApplicantId: dsaApplicantId } })
            // console.log(list_of_partner)

            responseData.push({
                "list_of_partner_lead": list_of_partner_lead,
            })

            // response = {
            //     status: ApiResponseStatus.SUCCESS,
            //     data: responseData

            // }
            return list_of_partner_lead
        }
        }


    async listOfPartnerOpportunities() {
        let get_dsa_applicant_id = await this.applicationStatusRepository.find()
        let filter_code = []
        get_dsa_applicant_id.forEach((currentCode) => {
            if (currentCode.currentCode === "0") {
                filter_code.push(currentCode.dsaApplicantId);
            }
        })
        let responseData = [];
        let response: ApiResponse<FactDsaApplicantDetail>;

        for (let dsaApplicantId of filter_code) {
            let list_of_partner_opportunities = await this.factDsaApplicantDetailRepository.find({ where: { dsaApplicantId:dsaApplicantId}})

            responseData.push({
                "list_of_partner_opportunities": list_of_partner_opportunities,
            })

            response = {
                status: ApiResponseStatus.SUCCESS,
                data: responseData

            }
        }
        return response
    }
}
