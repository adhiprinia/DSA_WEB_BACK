import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { Repository, UpdateResult } from 'typeorm';
import { CreateDirectorDetailDto } from './dto/create-director_detail.dto';
import { UpdateDirectorDetailDto } from './dto/update-director_detail.dto';
import { DirectorDetail } from './entities/director_detail.entity';

@Injectable()
export class DirectorDetailService {
  constructor(@InjectRepository(DirectorDetail)private directorDetailRepository:Repository<DirectorDetail>){}
  async create(createDirectorDetailDto: CreateDirectorDetailDto):Promise<ApiResponse<DirectorDetail>> {
    let director_detail = new DirectorDetail()
    director_detail.dsaApplicantId = createDirectorDetailDto.dsaApplicantId
    director_detail.aadhaarCard = createDirectorDetailDto.aadhaarCard
    director_detail.aadhaarCardDocUpload = createDirectorDetailDto.aadhaarCardDocUpload
    director_detail.panCard = createDirectorDetailDto.panCard
    director_detail.panCardDocUpload = createDirectorDetailDto.panCardDocUpload
    director_detail.dateOfBirth = createDirectorDetailDto.dateOfBirth
    director_detail.gender = createDirectorDetailDto.gender
    director_detail.ckycNumber = createDirectorDetailDto.ckycNumber
    director_detail.fathersName = createDirectorDetailDto.fathersName
    director_detail.highestQualification = createDirectorDetailDto.highestQualification
    director_detail.profession = createDirectorDetailDto.profession
    director_detail.salutation = createDirectorDetailDto.salutation
    let saved_director_detail = await this.directorDetailRepository.save(director_detail)
    let response: ApiResponse<DirectorDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_director_detail
    };
    return response;
  }


  async inActive(updateDirectorDetailDto:UpdateDirectorDetailDto):Promise<UpdateResult>{
    try {
    let response:UpdateResult =await this.directorDetailRepository
    .createQueryBuilder()
    .update(DirectorDetail)
    .where({ dsaDirectorId : updateDirectorDetailDto.dsaDirectorId})
    .set({status:updateDirectorDetailDto.status})
    .execute();
    return response;
  } catch (error) {
    console.log(error)
  }
}
 


  async findAll():Promise<ApiResponse<DirectorDetail[]>> {
    let director_detail_result = await this.directorDetailRepository.find()
    let responsData = [];
    responsData.push({
      "director_detail_result":director_detail_result,
      "totalCount":director_detail_result.length,
    });
    let response: ApiResponse<DirectorDetail[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findOne(id: string): Promise<ApiResponse<DirectorDetail>> {
    let director_detail_result = await this.directorDetailRepository.findOne({ where: { dsaDirectorId: id } });
    let response: ApiResponse<DirectorDetail>;
    if (director_detail_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: director_detail_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }


  async update(updateDirectorDetailDto: UpdateDirectorDetailDto): Promise<ApiResponse<DirectorDetail>> {
    let statuscodes = "";
    let statusNames = ""
    // switch (myParam) {
    //   case "AD001":
    //     statuscodes = 'addressdetailcompleted'
    //     statusNames = 'addressdetailcompleted'
    //     break;
    //   default:
    //     statuscodes = "addressdetailpending"
    //     break;
    // }
    let director_detail_result = await this.directorDetailRepository.findOne({ where: { dsaApplicantId: updateDirectorDetailDto.dsaApplicantId} });
    let director_detail_data = { ...director_detail_result, ...updateDirectorDetailDto };
    director_detail_data.dsaApplicantId = updateDirectorDetailDto.dsaApplicantId
    director_detail_data.aadhaarCard = updateDirectorDetailDto.aadhaarCard
    director_detail_data.aadhaarCardDocUpload = updateDirectorDetailDto.aadhaarCardDocUpload
    director_detail_data.panCard = updateDirectorDetailDto.panCard
    director_detail_data.panCardDocUpload = updateDirectorDetailDto.panCardDocUpload
    director_detail_data.dateOfBirth = updateDirectorDetailDto.dateOfBirth
    director_detail_data.gender = updateDirectorDetailDto.gender
    director_detail_data.ckycNumber = updateDirectorDetailDto.ckycNumber
    director_detail_data.fathersName = updateDirectorDetailDto.fathersName
    director_detail_data.highestQualification = updateDirectorDetailDto.highestQualification
    director_detail_data.profession = updateDirectorDetailDto.profession
    let updated_director_detail_data = await this.directorDetailRepository.save(director_detail_data);
    let response: ApiResponse<DirectorDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_director_detail_data
    };
    return response;
  }


  
  // async remove(id: string): Promise<ApiResponse<DeleteResult>> {
  //   let response: DeleteResult = await this.directorDetailRepository.delete({ directorDetailId: id });
    
  //   let result: ApiResponse<DeleteResult> = {
  //     status: ApiResponseStatus.SUCCESS,
  //     data: response
  //   };
  //   return result;
  // }
}
