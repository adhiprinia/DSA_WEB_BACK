import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { debug } from 'console';
import { ApiResponse, ApiResponseStatus } from 'src/config/response';
import { Repository } from 'typeorm';
// import { DebugLogger } from 'util';
import { CreateResourceInfoUploadDto } from './dto/create-resource_info_upload.dto';
import { UpdateResourceInfoUploadDto } from './dto/update-resource_info_upload.dto';
import { ResourceInfoUpload } from './entities/resource_info_upload.entity';

@Injectable()
export class ResourceInfoUploadService {
  constructor(@InjectRepository(ResourceInfoUpload) private resourceInfoUploadRepository: Repository<ResourceInfoUpload>) { }

  async create(createResourceInfoUploadDto: CreateResourceInfoUploadDto): Promise<ApiResponse<ResourceInfoUpload>> {
    let find_cource_code = await this.resourceInfoUploadRepository.createQueryBuilder()
      .select('course_code')
      .execute()
    let get_cource_code = find_cource_code
    // console.log(get_cource_code.sort())
    const ids = get_cource_code.map(object => {
      return object.course_code;
    });
     let courseCodeInOrder = ids.sort()
     let courseCode = courseCodeInOrder.pop()
    //  console.log(courseCode)
    const autoIncrement= (courseCode) => {
        let strings = courseCode.replace(/[0-9]/g, '');
        let digits = (parseInt(courseCode.replace(/[^0-9]/g, '')) + 1).toString();
        if (digits.length < 4)
          digits = ("000" + digits).substr(-3);
        return strings + digits;
    }
    let resource_info_upload = new ResourceInfoUpload()
    resource_info_upload.category_type = createResourceInfoUploadDto.categoryType
    resource_info_upload.category_name = createResourceInfoUploadDto.categoryName
    resource_info_upload.category_description = createResourceInfoUploadDto.categoryDescription
    resource_info_upload.category_image = createResourceInfoUploadDto.categoryImage
    resource_info_upload.category_content = createResourceInfoUploadDto.categoryContent
    resource_info_upload.category_document_type = createResourceInfoUploadDto.categoryDocumentType
    resource_info_upload.category_supported_english = createResourceInfoUploadDto.categorySupportedEnglish
    resource_info_upload.category_supported_hindi = createResourceInfoUploadDto.categorySupportedHindi
    resource_info_upload.course = createResourceInfoUploadDto.course
    resource_info_upload.course_start_date = createResourceInfoUploadDto.courseStartDate
    resource_info_upload.course_end_date = createResourceInfoUploadDto.courseEndDate
    resource_info_upload.courseCode = autoIncrement(courseCode)
    // console.log(resource_info_upload)
    // let saved_resource_info_upload = await this.resourceInfoUploadRepository.save(resource_info_upload)
    let response: ApiResponse<ResourceInfoUpload> = {
      status: ApiResponseStatus.SUCCESS,
      data: resource_info_upload
    };
    return response;
  }


  // async create(createResourceInfoUploadDto: CreateResourceInfoUploadDto, filePath): Promise<ApiResponse<ResourceInfoUpload>> {

  //   let resource_info_upload = new ResourceInfoUpload()
  //   resource_info_upload.categoryType = createResourceInfoUploadDto.categoryType
  //   resource_info_upload.categoryName = createResourceInfoUploadDto.categoryName
  //   resource_info_upload.categoryDescription = createResourceInfoUploadDto.categoryDescription
  //   resource_info_upload.categoryImage = createResourceInfoUploadDto.categoryImage
  //   resource_info_upload.categoryContent = createResourceInfoUploadDto.categoryContent
  //   resource_info_upload.categoryDocumentType = filePath
  //   resource_info_upload.categorySupportedEnglish = createResourceInfoUploadDto.categorySupportedEnglish
  //   resource_info_upload.course = createResourceInfoUploadDto.course
  //   // console.log(resource_info_upload)
  //   let saved_resource_info_upload = await this.resourceInfoUploadRepository.save(resource_info_upload)
  //   let response: ApiResponse<ResourceInfoUpload> = {
  //     status: ApiResponseStatus.SUCCESS,
  //     data: saved_resource_info_upload
  //   };
  //   return response;
  // }

  async findAll(): Promise<ApiResponse<ResourceInfoUpload[]>> {
    let resource_info_upload = await this.resourceInfoUploadRepository.find()

    let responsData = [];
    responsData.push({
      "resource_info_upload": resource_info_upload,
      "totalCount": resource_info_upload.length,
    });
    let response: ApiResponse<ResourceInfoUpload[]> = {
      status: ApiResponseStatus.SUCCESS,
      data: responsData
    }
    return response;
  }




  async update(updateResourceInfoUploadDto: UpdateResourceInfoUploadDto) {
    let resource_info_upload = await this.resourceInfoUploadRepository.findOne({ where: { dsaResourceId: updateResourceInfoUploadDto.dsaResourceId } })
    let resource_info_upload_data = { ...resource_info_upload, ...updateResourceInfoUploadDto }
    resource_info_upload_data.categoryType = updateResourceInfoUploadDto.categoryType
    resource_info_upload_data.categoryName = updateResourceInfoUploadDto.categoryName
    resource_info_upload_data.categoryDescription = updateResourceInfoUploadDto.categoryDescription
    resource_info_upload_data.categoryImage = updateResourceInfoUploadDto.categoryImage
    resource_info_upload_data.categoryDocumentType = updateResourceInfoUploadDto.categoryDocumentType
    resource_info_upload_data.categorySupportedEnglish = updateResourceInfoUploadDto.categorySupportedEnglish
    resource_info_upload_data.course = updateResourceInfoUploadDto.course
    resource_info_upload.courseCode = updateResourceInfoUploadDto.courseCode
    let updated_resource_info_upload_data = await this.resourceInfoUploadRepository.save(resource_info_upload_data);
    let response: ApiResponse<ResourceInfoUpload> = {
      status: ApiResponseStatus.SUCCESS,
      data: updated_resource_info_upload_data
    };
    return response;
  }

  async getResourceCentre()/* : Promise<ApiResponse<ResourceInfoUpload>> */ {
    let resource_info_upload = await this.resourceInfoUploadRepository.query('select dsa.courseinheirachy (json_agg(r)) from dsa.dsa_resource r')
    // console.log(resource_info_upload)
    const queriedValue = resource_info_upload?.[0]?.['courseinheirachy']
    let arrayMy = []
    for (let values of Object.values(queriedValue)) {
      // console.log(values)
      for (let value of Object.values(values)) {
        // console.log(value);
        // arrayMy.push({ "response": value. })
      }
    }

    // let queriedValues = Object.entries([queriedValue,null,3])
    // console.log(queriedValue)

    //     let valuess = Object.entries([queriedValue])

    //     // Object.entries(user)
    //     valuess.map((key, val,Array) => {
    //       console.log( `The ${key} is ${Array}`);
    //     });
    // console.log(data)



    // filter((key) => key.includes('category_document_type')).
    // reduce((cur, key) => { return Object.assign(cur, { [key]: queriedValue[key] })}, {});
    // console.log(queriedValues)
    // let extentsion = queriedValue.fileName.split(".")[1];
    // console.log(extentsion)
    // let imagePath = process.cwd() + FileService.PROFILE_IMG_PATH;
    // file_upload.filePath = await readFile(imagePath + createFileDto.fileId + '-' + createFileDto.fileType+ '.' + extentsion, { encoding: 'base64' })
    // let responsData = [];
    // let responsData = {
    //   "resource_info_upload": queriedValue
    // };
    let response: ApiResponse<ResourceInfoUpload> = {
      status: ApiResponseStatus.SUCCESS,
      data: queriedValue
    }

    return response;
  }

  async findColumns() {
    let response: ApiResponse<ResourceInfoUpload>;
    let column_list = await this.resourceInfoUploadRepository.query("SELECT column_name FROM information_schema.columns WHERE table_schema='dsa' AND table_name='dsa_resource'");
    let columns = [];
    await column_list.map(async (value) => {
      let index_name = value['column_name'];
      index_name = index_name.replace(/_/g, " ");
      index_name = index_name.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
      index_name = index_name.replace(/ /g, "");
      index_name = index_name.charAt(0).toLowerCase() + index_name.slice(1);
      let column_name = value['column_name'];
      column_name = column_name.replace(/_/g, " ");
      column_name = column_name.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
      column_name = column_name.replace(/^\s+|\s+$/gm, '');
      let removed_columns = ["Dsa Resource Id", "Category Image", "Category Content", "Category Document Type", "Category Supported English", "Category Supported Hindi"];
      if (removed_columns.indexOf(column_name) == -1) {
        columns.push({
          "title": column_name,
          "dataIndex": index_name
        });
      }
    });
    if (column_list) {
      response = {
        status: ApiResponseStatus.SUCCESS,
        data: columns
      }
    }
    else {
      response = {
        status: ApiResponseStatus.ERROR
      }
    }
    return response;
  }
}
