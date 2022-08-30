import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { DeleteResult, Repository } from 'typeorm';
import { CreateAddressDetailDto } from './dto/create-address_detail.dto';
import { UpdateAddressDetailDto } from './dto/update-address_detail.dto';
import { AddressDetail } from './entities/address_detail.entity';

@Injectable()
export class AddressDetailService {
  constructor(@InjectRepository(AddressDetail)private addressDetailRepository:Repository<AddressDetail>){}
  async create(createAddressDetailDto: CreateAddressDetailDto):Promise<ApiResponse<AddressDetail>> {

    let address_detail = new AddressDetail()
    address_detail.addressLine1 = createAddressDetailDto.addressLine1
    address_detail.addressLine2 = createAddressDetailDto.addressLine2
    address_detail.pinCode = createAddressDetailDto.pinCode
    address_detail.area = createAddressDetailDto.area
    address_detail.city = createAddressDetailDto.city
    address_detail.district = createAddressDetailDto.district
    address_detail.state = createAddressDetailDto.state
    address_detail.country = createAddressDetailDto.country
    address_detail.residentType = createAddressDetailDto.residentType

    address_detail.addressDetailEntdBy = createAddressDetailDto.addressDetailEntdBy
    address_detail.addressDetailEntdOn = createAddressDetailDto.addressDetailEntdOn
    let saved_address_detail = await this.addressDetailRepository.save(address_detail)
    let response: ApiResponse<AddressDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_address_detail
    };
    return response;
  }



  async findAll():Promise<ApiResponse<AddressDetail[]>> {
    let address_detail_result = await this.addressDetailRepository.find()
    let responsData = [];
    responsData.push({
      "address_detail_result":address_detail_result,
      "totalCount":address_detail_result.length,
    });
    let response: ApiResponse<AddressDetail[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findById(id: string): Promise<ApiResponse<AddressDetail>> {
   
    let address_detail_result = await this.addressDetailRepository.find({ where: { dsaApplicantId:id} });
    let response: ApiResponse<AddressDetail>;
    console.log(address_detail_result,"AAAAAAAAAA")
    if (address_detail_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: address_detail_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }


  async update(updateAddressDetailDto: UpdateAddressDetailDto): Promise<ApiResponse<AddressDetail>> {
    let address_detail_result = await this.addressDetailRepository.findOne({ where: { dsaApplicantId: updateAddressDetailDto.dsaApplicantId ,addressType:updateAddressDetailDto.addressType} });
    let address_detail_data = { ...address_detail_result, ...updateAddressDetailDto };
    address_detail_data.addressLine1 = updateAddressDetailDto.addressLine1
    address_detail_data.addressLine2 = updateAddressDetailDto.addressLine2
    address_detail_data.pinCode = updateAddressDetailDto.pinCode
    address_detail_data.area = updateAddressDetailDto.area
    address_detail_data.city = updateAddressDetailDto.city
    address_detail_data.district = updateAddressDetailDto.district
    address_detail_data.state = updateAddressDetailDto.state
    address_detail_data.country = updateAddressDetailDto.country
    address_detail_data.residentType = updateAddressDetailDto.residentType
    address_detail_data.addressType = updateAddressDetailDto.addressType
    address_detail_data.landMark = updateAddressDetailDto . landMark
    address_detail_data.addressDetailModBy = updateAddressDetailDto.addressDetailModBy
    address_detail_data.addressDetailModOn = updateAddressDetailDto.addressDetailModOn
    let updated_address_detail_data = await this.addressDetailRepository.save(address_detail_data);
  
    let response: ApiResponse<AddressDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_address_detail_data
    };
    return response;
  }


  
  async remove(id: string): Promise<ApiResponse<DeleteResult>> {
    let response: DeleteResult = await this.addressDetailRepository.delete({ addressDetailId: id });
    
    let result: ApiResponse<DeleteResult> = {
      status: ApiResponseStatus.SUCCESS,
      data: response
    };
    return result;
  }

}
