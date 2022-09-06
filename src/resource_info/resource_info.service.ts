import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { DeleteResult, Repository } from 'typeorm';
import { CreateResourceInfoDto } from './dto/create-resource_info.dto';
import { FilterByDataDto } from './dto/filterByData-resource_info.dto';
import { UpdateResourceInfoDto } from './dto/update-resource_info.dto';
import { ResourceInfo } from './entities/resource_info.entity';

@Injectable()
export class ResourceInfoService {
  constructor(@InjectRepository(ResourceInfo)private resourceInfoRepository:Repository<ResourceInfo>){}
  async create(createResourceInfoDto: CreateResourceInfoDto): Promise<ApiResponse<ResourceInfo>> {
    let resource_info = new ResourceInfo()
    resource_info.dsaApplicantId = createResourceInfoDto.dsaApplicantId
    resource_info.resourceId = createResourceInfoDto.resourceId
    resource_info.categoryType = createResourceInfoDto.categoryType
    resource_info.categoryDescription = createResourceInfoDto.categoryDescription
    resource_info.categoryImage = createResourceInfoDto.categoryImage
    resource_info.categoryContent = createResourceInfoDto.categoryContent
    resource_info.categoryDocumentType = createResourceInfoDto.categoryDocumentType
    resource_info.categorySupportedEnglish = createResourceInfoDto.categorySupportedEnglish
    resource_info.categorySupportedHindi = createResourceInfoDto.categorySupportedHindi
    resource_info.parentId = createResourceInfoDto.parentId
    resource_info.level = createResourceInfoDto.level
    resource_info.resourceIsStatus = createResourceInfoDto.resourceIsStatus
    resource_info.dsaResourceInfoEntdBy = createResourceInfoDto.dsaResourceInfoEntdBy
    resource_info.dsaResourceInfoEntdOn = createResourceInfoDto.dsaResourceInfoEntdOn
    let saved_resource_info = await this.resourceInfoRepository.save(resource_info)
    let response: ApiResponse<ResourceInfo> = {
      status: ApiResponseStatus.SUCCESS,
      data: saved_resource_info
    };
    return response;
  }

  async findOne():Promise<ApiResponse<ResourceInfo[]>> {
    let resource_info_result = await this.resourceInfoRepository.find()
    let responsData = [];
    responsData.push({
      "resource_info_result":resource_info_result,
      "totalCount":resource_info_result.length,
    });
    let response: ApiResponse<ResourceInfo[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async findByDash(id: string): Promise<ApiResponse<ResourceInfo>> {
    let resource_info_result = await this.resourceInfoRepository.find({ where: { dsaApplicantId: id ,complete:"false"} });
    let response: ApiResponse<ResourceInfo>;
    if (resource_info_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: resource_info_result
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }

  async findAllDashBoard(id:string):Promise<ApiResponse<ResourceInfo[]>> {
    let resource_info_result = await this.resourceInfoRepository.find({where:{complete:"FALSE"}})
    console.log(resource_info_result)
    let responsData = [];
    responsData.push({
      "resource_info_result":resource_info_result,
      "totalCount":resource_info_result.length,
    });
    let response: ApiResponse<ResourceInfo[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }

  async getCatagory():Promise<ApiResponse<ResourceInfo>> {
    let resource_info_result = await this.resourceInfoRepository.createQueryBuilder('key')
    .innerJoinAndMapOne('key.ResourceInfo', ResourceInfo, 'resourceInfo', 'key.parentId = resourceInfo.childId')
    .where('resourceInfo.childId = key.parentId') // or you can change condition to 'key.userId = :userId' because of you have `userId` in Key
    .getMany(); 
    // console.log('resource_info_result',resource_info_result);
    let responsData = [];
    responsData.push({
      "resource_info_result":resource_info_result,
    });
    let response: ApiResponse<ResourceInfo> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }
  
  async fitlerByData(filterByDataDto:FilterByDataDto): Promise<ApiResponse<ResourceInfo>>{
    let { dsaResourceId,
          dsaApplicantId,
          resourceId,
          categoryType,
          categoryName,
          categoryDescription,
          categoryImage,
          categoryContent,
          categoryDocumentType,
          categorySupportedEnglish,
          categorySupportedHindi,
          parentId,
          childId,
          course

        } = filterByDataDto;
    let whereObj:any = {
    };
    if(dsaResourceId !== ""){
      whereObj.dsaResourceId = dsaResourceId
    }   
    if(dsaApplicantId !== ""){
      whereObj.dsaApplicantId = dsaApplicantId
    } 
    if(resourceId !== ""){
      whereObj.resourceId = resourceId
    }
    if(categoryType !== ""){
      whereObj.categoryType = categoryType
    }
    if(categoryName !== ""){
      whereObj.categoryName = categoryName
    }
    if(categoryDescription !== ""){
      whereObj.categoryDescription = categoryDescription
    }
    if(categoryImage !== ""){
      whereObj.categoryImage = categoryImage
    }
    if(categoryContent !== ""){
      whereObj.categoryContent = categoryContent
    }
    if(categoryDocumentType !== ""){
      whereObj.categoryDocumentType = categoryDocumentType
    }
    if(categorySupportedEnglish !== ""){
      whereObj.categorySupportedEnglish = categorySupportedEnglish
    }
    if(categorySupportedHindi !== ""){
      whereObj.categorySupportedHindi = categorySupportedHindi
    }
    if(parentId !== ""){
      whereObj.parentId = parentId,childId
    }
    if(childId !== ""){
      whereObj.childId = childId
    }
    if(course !== ""){
      whereObj.course = course
    }
let findOne={
  where:parentId
}
    
    let find = {
      where: whereObj
    }
    let resource_info_result = await this.resourceInfoRepository.find(find);
  
    let responsData = [];
    responsData.push({
      "resource_info_result":resource_info_result,
    });
    let response: ApiResponse<ResourceInfo>;
    if (resource_info_result) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: responsData
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  };



  async update( updateResourceInfoDto: UpdateResourceInfoDto): Promise<ApiResponse<ResourceInfo>> {
    let resource_info_result = await this.resourceInfoRepository.findOne({ where: { dsaApplicantId: updateResourceInfoDto.dsaApplicantId } });
    let resource_info_data = { ...resource_info_result, ...updateResourceInfoDto };
    resource_info_data.resourceId = updateResourceInfoDto.resourceId
    resource_info_data.categoryType = updateResourceInfoDto.categoryType
    resource_info_data.categoryDescription = updateResourceInfoDto.categoryDescription
    resource_info_data.categoryImage = updateResourceInfoDto.categoryImage
    resource_info_data.categoryContent = updateResourceInfoDto.categoryContent
    resource_info_data.categoryDocumentType = updateResourceInfoDto.categoryDocumentType
    resource_info_data.categorySupportedEnglish = updateResourceInfoDto.categorySupportedEnglish
    resource_info_data.categorySupportedHindi = updateResourceInfoDto.categorySupportedHindi
    resource_info_data.parentId = updateResourceInfoDto.parentId
    resource_info_data.level = updateResourceInfoDto.level
    resource_info_data.resourceIsStatus = updateResourceInfoDto.resourceIsStatus
    resource_info_data.dsaResourceInfoEntdBy = updateResourceInfoDto.dsaResourceInfoEntdBy
    resource_info_data.dsaResourceInfoEntdOn = updateResourceInfoDto.dsaResourceInfoEntdOn
    let updated_resource_info_data = await this.resourceInfoRepository.save(resource_info_data);
    let response: ApiResponse<ResourceInfo> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_resource_info_data
    };
    return response;
  }


  async comletedUpdate(updateResourceInfoDto: UpdateResourceInfoDto) {
    let resource_info= await this.resourceInfoRepository
    .createQueryBuilder()
    .update(ResourceInfo)
    .where({parentId:updateResourceInfoDto.parentId})
    .set(
      {
        complete:'true'
      }
    )
    .execute()
    let response = {
      status: ApiResponseStatus.SUCCESS,
      data: resource_info
    };
    return response;
  }
}

