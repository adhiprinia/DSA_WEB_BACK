import { HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { CONFIG } from 'src/config/config';
import { ApiResponseStatus } from 'src/config/response';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { Repository } from 'typeorm';
import { FullFillOfferRequestBody } from './dto/full_fill_offer_req.dto';
import { GetCustomerAssetsRequest } from './dto/get_customer_asset_req.dto';
import { GetProductWebTokenRequest } from './dto/get_product_web_token.dto';
import { PingRequest } from './dto/ping_req.dto';
import { UpdateFactDsaApplicantDetailDto } from './dto/update-fact_dsa_applicant_detail.dto';

@Injectable()
export class CibilDetService {
    constructor(@InjectRepository(FactDsaApplicantDetail) private factDsaApplicantDetailRepository: Repository<FactDsaApplicantDetail>){}


    async getKamal(){
        let get_kamal = await axios.get(CONFIG.EZFLO_BACKEND_HOST)
        return get_kamal.data
    }

    async getCibil(det,updateFactDsaApplicantDetailDto:UpdateFactDsaApplicantDetailDto){
        try {
            // Logger.debug(CONFIG.EZFLO_BACKEND_HOST);
            // const cibilScore = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/cibil_det/getCibil`,det);
            const cibilScore = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/cibil_det/getCibil`,det);
            // console.log(cibilScore.data.CIBIL.timestamp)
            let fact_dsa_applicant_detail_result = await this.factDsaApplicantDetailRepository.findOne({ where: { dsaApplicantId: updateFactDsaApplicantDetailDto.dsaApplicantId }});
            let fact_dsa_applicant_detail_data = { ...fact_dsa_applicant_detail_result };
            fact_dsa_applicant_detail_data.cibilScore =  cibilScore.data.CIBIL.score
            fact_dsa_applicant_detail_data.cibilDateAndTime = cibilScore.data.CIBIL.timestamp 
            let saved_fact_dsa_applicant_detail_result = await this.factDsaApplicantDetailRepository.save(fact_dsa_applicant_detail_data)

            return cibilScore.data
        }
        catch(err){
            console.log(err?.response?.data);
            return err?.response?.data;
        }
    }

    /// full fill offer api 
    async fullFillOffer(fullFillOfferRequestBody: FullFillOfferRequestBody) {
        try {
            let body = fullFillOfferRequestBody;
            // console.log(body)
            let full_fill_offer = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/cibil_det/fullfilloffer`, body)
            let responseData = []
            responseData.push({
                "full_fill_offer": full_fill_offer
            })
            let response = {
                status: ApiResponseStatus.SUCCESS,
                data: full_fill_offer
            }

            return response.data;

        } catch (error) {
            //// throwing the same httpexception if it was created by use
            if (error instanceof HttpException) {
                throw error;
            }
            //if the error is unidentifed then throw it as internal error
            else {
                throw new InternalServerErrorException(error)
            }
        }
    }
    ///ping api
    async ping(pingRequest: PingRequest) {
        try {
            let body = pingRequest;
            // console.log(body)
            let ping_request = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/cibil_det/ping`,body)
            let responseData = []
            responseData.push({
                "ping_request": ping_request
            })
            let response = {
                status: ApiResponseStatus.SUCCESS,
                data: ping_request.data
            }
            return response;
        } catch (error) {
            //// throwing the same httpexception if it was created by use
            if (error instanceof HttpException) {
                throw error;
            }
            //if the error is unidentifed then throw it as internal error
            else {
                throw new InternalServerErrorException(error)
            }
        }
    }
    ///get  customer assest api
    async getCustomerAssets(getCustomerAssetsRequest: GetCustomerAssetsRequest) {
        try {
            let body = getCustomerAssetsRequest;
            let get_customer_assets_request = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/cibil_det/getCustomerAsset`, body)
            let responseData = []
            responseData.push({
                "get_customer_assets_request": get_customer_assets_request
            })
            let response = {
                status: ApiResponseStatus.SUCCESS,
                data: get_customer_assets_request.data
            }
            return response;
        } catch (error) {
            //// throwing the same httpexception if it was created by use
            if (error instanceof HttpException) {
                throw error;
            }
            //if the error is unidentifed then throw it as internal error
            else {
                throw new InternalServerErrorException(error)
            }
        }
    }
    /// get product web token 
    async getProductWebToken(getProductWebTokenRequest: GetProductWebTokenRequest) {
        try {
            let body = getProductWebTokenRequest;
            let get_product_web_token_request = await axios.post(`${CONFIG.EZFLO_BACKEND_HOST}/cibil_det/getProductWebToken`, body)
            let responseData = []
            responseData.push({
                "get_product_web_token_request": get_product_web_token_request
            })
            let response = {
                status: ApiResponseStatus.SUCCESS,
                data: get_product_web_token_request.data
            }
            return response;
        } catch (error) {
            //// throwing the same httpexception if it was created by use
            if (error instanceof HttpException) {
                throw error;
            }
            //if the error is unidentifed then throw it as internal error
            else {
                throw new InternalServerErrorException(error)
            }
        }
    }
}

