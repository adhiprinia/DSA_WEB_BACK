import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { AddressDetail } from 'src/address_detail/entities/address_detail.entity';
import { BankDetail } from 'src/bank_detail/entities/bank_detail.entity';
import { ApiResponse, ApiResponseStatus, ErrorMessageType } from 'src/config/response';
import { FactDsaApplicantDetail } from 'src/fact_dsa_applicant_detail/entities/fact_dsa_applicant_detail.entity';
import { ReferenceDetail } from 'src/reference_detail/entities/reference_detail.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateLoginFormDto } from './dto/create-login_form.dto';
import { UpdateLoginFormDto } from './dto/update-login_form.dto';
import { LoginForm } from './entities/login_form.entity';

@Injectable()
export class LoginFormService {
  constructor(@InjectRepository(LoginForm)private loginFormRepository:Repository<LoginForm>,
  @InjectRepository(FactDsaApplicantDetail)private factDsaApplicantDetailRepository:Repository<FactDsaApplicantDetail>
  ){}

  async create(body){
    let phone_number = body.phoneno
    // let login_form = new LoginForm()
    let verify_phone_number = await this.factDsaApplicantDetailRepository.find({where:{mobileNumber:phone_number}})
   let gen_id;
   let response;
  if(verify_phone_number){
    const querystring = require('querystring');
 
   axios.post(`http://localhost:8082/otp-verify`,                
    querystring.stringify({
      phoneno:phone_number,
      otp:body.otp
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }
  )
  .then((res) => {
    console.log(res.data, "response"); 
     response={
      status:"Success",
      data: res.data
    };
       
return response;
             
  })
  .catch((error) => {console.log(error, "error")

       
return response;
})

}

}


  async findAll():Promise<ApiResponse<LoginForm[]>> {
    let login_form_result = await this.loginFormRepository.find()
    let responsData = [];
    responsData.push({
      "login_form_result":login_form_result,
      "totalCount":login_form_result.length,
    });
    let response: ApiResponse<LoginForm[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findOne(id: string): Promise<ApiResponse<LoginForm>> {
    let login_form_result = await this.loginFormRepository.findOne({ where: { loginFormId: id } });
    let response: ApiResponse<LoginForm>;
    if (login_form_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: login_form_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }

  async update(updateLoginFormDto: UpdateLoginFormDto): Promise<ApiResponse<LoginForm>> {
    let login_form_result = await this.loginFormRepository.findOne({ where: { loginFormId: updateLoginFormDto.loginFormId } });
    let login_form_data = { ...login_form_result, ...updateLoginFormDto };
    login_form_data.mobileNumber = updateLoginFormDto.mobileNumber
    login_form_data.userName = updateLoginFormDto.userName
    login_form_data.status = updateLoginFormDto.status
    login_form_data.loginFormModBy = updateLoginFormDto.loginFormModBy
    login_form_data.loginFormModOn = updateLoginFormDto.loginFormModOn
    let updated_transaction = await this.loginFormRepository.save(login_form_result);
    let response: ApiResponse<LoginForm> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_transaction
    };
    return response;
  }
  
  async remove(id: string): Promise<ApiResponse<DeleteResult>> {
    let response: DeleteResult = await this.loginFormRepository.delete({ loginFormId: id });
    
    let result: ApiResponse<DeleteResult> = {
      status: ApiResponseStatus.SUCCESS,
      data: response
    };
    return result;
  }
}
