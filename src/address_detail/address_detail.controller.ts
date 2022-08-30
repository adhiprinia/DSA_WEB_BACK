import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from 'src/config/response';
import { DeleteResult } from 'typeorm';
import { AddressDetailService } from './address_detail.service';
import { CreateAddressDetailDto } from './dto/create-address_detail.dto';
import { UpdateAddressDetailDto } from './dto/update-address_detail.dto';
import { AddressDetail } from './entities/address_detail.entity';

@Controller('address_detail')
export class AddressDetailController {
  constructor(private readonly addressDetailService: AddressDetailService) {}

  @Post('create')
  create(@Body() createAddressDetailDto: CreateAddressDetailDto):Promise<ApiResponse<AddressDetail>> {
    return this.addressDetailService.create(createAddressDetailDto);
  }

  @Post('findAll')
  findAll():Promise<ApiResponse<AddressDetail[]>> {
    return this.addressDetailService.findAll();
  }

  @Post('findOne')
  find(@Body('dsaApplicantId') id:string):Promise<ApiResponse<AddressDetail>> {
    return this.addressDetailService.findById(id);
  }

  @Post('update')
  update(@Body() updateAddressDetailDto: UpdateAddressDetailDto):Promise<ApiResponse<AddressDetail>> {
    return this.addressDetailService.update(updateAddressDetailDto);
  }
  

  @Post('delete')
  remove(@Body('addressDetailId') id: string):Promise<ApiResponse<DeleteResult>> {
    return this.addressDetailService.remove(id);
  }

  // @Post('findColumns')
  // findColumns():Promise<ApiResponse<AddressDetail>> {
  //   return this.addressDetailService.findColumns();
  // }
}
