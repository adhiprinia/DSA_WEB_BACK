import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { baseUrl } from 'src/localUrl/Url';
import { DeleteResult, Repository } from 'typeorm';
import { CreateBankDetailDto } from './dto/create-bank_detail.dto';
import { UpdateBankDetailDto } from './dto/update-bank_detail.dto';
import { BankDetail } from './entities/bank_detail.entity';

@Injectable()
export class BankDetailService {
  constructor(@InjectRepository(BankDetail)private bankDetailRepository:Repository<BankDetail>){}
  async create(createBankDetailDto: CreateBankDetailDto):Promise<ApiResponse<BankDetail>> {
    let bank_detail = new BankDetail()
    bank_detail.ifscCode = createBankDetailDto.ifscCode
    bank_detail.accountNumber = createBankDetailDto.accountNumber
    bank_detail.bankName = createBankDetailDto.bankName
    bank_detail.branchName = createBankDetailDto.branchName
    bank_detail.micrNumber = createBankDetailDto.micrNumber
    bank_detail.noOfYearsOfRelationShipWithBank = createBankDetailDto.noOfYearsOfRelationShipWithBank
    bank_detail.accountType = createBankDetailDto.accountType
    bank_detail.accountHolder = createBankDetailDto.accountHolder
    bank_detail.bankDetailEndtBy = createBankDetailDto.bankDetailEndtBy
    bank_detail.bankDetailEndtOn = createBankDetailDto.bankDetailEndtOn
    let saved_bank_detail = await this.bankDetailRepository.save(bank_detail)
    let response: ApiResponse<BankDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_bank_detail
    };
    return response;
  }

  async findAll():Promise<ApiResponse<BankDetail[]>> {
    let bank_detail_result = await this.bankDetailRepository.find()
    let responsData = [];
    responsData.push({
      "bank_detail_result":bank_detail_result,
      "totalCount":bank_detail_result.length,
    });
    let response: ApiResponse<BankDetail[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findOne(id: string): Promise<ApiResponse<BankDetail>> {

    let bank_detail_result = await this.bankDetailRepository.findOne({ where: {dsaApplicantId: id } });
    let response: ApiResponse<BankDetail>;
    if (bank_detail_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: bank_detail_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }
  async uploadCancelledChegue(file,bankDetailId:string){
    console.log("bankDetailId in service",bankDetailId)
    console.log("file",file)
    let Url = `${baseUrl}${file[0].filename}`
    console.log(Url)
    
    await this.bankDetailRepository.createQueryBuilder()
    .createQueryBuilder()
    .update(BankDetail)
    .where({ bankDetailId : bankDetailId})
    .set({ cancelledCheque: Url})
    .execute();
    let response= {
      status:201
    };
    return response;
  }

  async update(updateBankDetailDto: UpdateBankDetailDto): Promise<ApiResponse<BankDetail>> {
    let bank_detail_result = await this.bankDetailRepository.findOne({ where: { dsaApplicantId: updateBankDetailDto.dsaApplicantId } });
    let bank_detail_data = { ...bank_detail_result, ...updateBankDetailDto };
    bank_detail_data.ifscCode = updateBankDetailDto.ifscCode
    bank_detail_data.accountNumber = updateBankDetailDto.accountNumber
    bank_detail_data.bankName = updateBankDetailDto.bankName
    bank_detail_data.branchName = updateBankDetailDto.branchName
    bank_detail_data.micrNumber = updateBankDetailDto.micrNumber
    bank_detail_data.noOfYearsOfRelationShipWithBank = updateBankDetailDto.noOfYearsOfRelationShipWithBank
    bank_detail_data.accountType = updateBankDetailDto.accountType
    bank_detail_data.accountHolder = updateBankDetailDto.accountHolder
    bank_detail_data.bankDetailModOn = updateBankDetailDto.bankDetailModOn

    let updated_transaction = await this.bankDetailRepository.save(bank_detail_data);
    let response: ApiResponse<BankDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_transaction
    };
    return response;
  }
}
