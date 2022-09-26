import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { Repository, UpdateResult } from 'typeorm';
import { CreateDirectorDetailDto } from './dto/create-director_detail.dto';
import { FindDirectorDto } from './dto/find-director.dto';
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
    director_detail.fullName = createDirectorDetailDto.fullName
    director_detail.mothersName = createDirectorDetailDto.mothersName
    director_detail.directorType = createDirectorDetailDto.directorType
    director_detail.highestQualification = createDirectorDetailDto.highestQualification
    director_detail.profession = createDirectorDetailDto.profession
    director_detail.salutation = createDirectorDetailDto.salutation
    director_detail.dateOfIncorporation = createDirectorDetailDto.dateOfIncorporation
    director_detail.isActive = createDirectorDetailDto.isActive
    let saved_director_detail = await this.directorDetailRepository.save(director_detail)
    let response: ApiResponse<DirectorDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_director_detail
    };
    return response;
  }



  async inActive(updateDirectorDetailDto:UpdateDirectorDetailDto):Promise<ApiResponse<DirectorDetail>>{
    try {
    let director_detail_result = await this.directorDetailRepository.findOne({ where: { directorType : updateDirectorDetailDto.directorType,dsaApplicantId:updateDirectorDetailDto.dsaApplicantId,isActive: true} });
    let director_detail_data = { ...director_detail_result, ...updateDirectorDetailDto };
    director_detail_data.isActive = updateDirectorDetailDto.isActive
    // console.log(director_detail_data)
    let updated_director_detail_data = await this.directorDetailRepository.save(director_detail_data);
    let response: ApiResponse<DirectorDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_director_detail_data
    };
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

  async findOne(findDirectorDto: FindDirectorDto): Promise<ApiResponse<DirectorDetail>> {
    try {
      if(findDirectorDto.directorType && findDirectorDto.dsaApplicantId){
        // console.log("findDirectorDto",findDirectorDto)
        let director_detail_result = await this.directorDetailRepository.find({ where: { dsaApplicantId:findDirectorDto.dsaApplicantId ,directorType:findDirectorDto.directorType,isActive:true} });
        // console.log(director_detail_result)
        if(director_detail_result.length===0){
          throw new HttpException("user not found",404)

        }
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
      }else {
        throw new HttpException("directorType & dsaApplicantId is not found in body",404)
      }
    } catch (error) {
      throw error
    }
  }


  async update(updateDirectorDetailDto: UpdateDirectorDetailDto): Promise<ApiResponse<DirectorDetail>> {
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
    director_detail_data.mothersName = updateDirectorDetailDto.mothersName
    director_detail_data.highestQualification = updateDirectorDetailDto.highestQualification
    director_detail_data.profession = updateDirectorDetailDto.profession
    director_detail_data.directorType = updateDirectorDetailDto.directorType
    director_detail_data.isActive = updateDirectorDetailDto.isActive
    director_detail_data.dateOfIncorporation = updateDirectorDetailDto.dateOfIncorporation
    let updated_director_detail_data = await this.directorDetailRepository.save(director_detail_data);
    let response: ApiResponse<DirectorDetail> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_director_detail_data
    };
    return response;
  }



}
