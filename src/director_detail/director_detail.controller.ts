import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse } from 'src/config/response';
import { DirectorDetailService } from './director_detail.service';
import { CreateDirectorDetailDto } from './dto/create-director_detail.dto';
import { FindDirectorDto } from './dto/find-director.dto';
import { UpdateDirectorDetailDto } from './dto/update-director_detail.dto';
import { DirectorDetail } from './entities/director_detail.entity';

@Controller('director_detail')
export class DirectorDetailController {
  constructor(private readonly directorDetailService: DirectorDetailService) { }

  @Post('create')
  create(@Body() createDirectorDetailDto: CreateDirectorDetailDto): Promise<ApiResponse<DirectorDetail>> {
    // console.log(createDirectorDetailDto)
    return this.directorDetailService.create(createDirectorDetailDto);
  }

  @Post('findAll')
  findAll(): Promise<ApiResponse<DirectorDetail[]>> {
    return this.directorDetailService.findAll();
  }

  @Post('findOne')
  findOne(@Body() findDirectorDto: FindDirectorDto): Promise<ApiResponse<DirectorDetail>> {
    return this.directorDetailService.findOne(findDirectorDto);
  }

  @Post('inActive')
  inActive(@Body() updateDirectorDetailDto: UpdateDirectorDetailDto) {
    return this.directorDetailService.inActive(updateDirectorDetailDto)
  }

  @Post('update')
  update(@Body() updateDirectorDetailDto: UpdateDirectorDetailDto) {
    return this.directorDetailService.update(updateDirectorDetailDto);

  }
}
