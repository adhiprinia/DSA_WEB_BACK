import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DirectorDetailService } from './director_detail.service';
import { CreateDirectorDetailDto } from './dto/create-director_detail.dto';
import { UpdateDirectorDetailDto } from './dto/update-director_detail.dto';

@Controller('director_detail')
export class DirectorDetailController {
  constructor(private readonly directorDetailService: DirectorDetailService) {}

  @Post('create')
  create(@Body() createDirectorDetailDto: CreateDirectorDetailDto) {
    console.log(createDirectorDetailDto)
    return this.directorDetailService.create(createDirectorDetailDto);
  }

  @Post('findAll')
  findAll() {
    return this.directorDetailService.findAll();
  }

  @Post('findOne')
  findOne(@Body('id') id: string) {
    return this.directorDetailService.findOne(id);
  }

  @Post('inActive')
  inActive(@Body()updateDirectorDetailDto:UpdateDirectorDetailDto){
    return this.directorDetailService.inActive(updateDirectorDetailDto)
  }

  @Post('update')
  update( @Body() updateDirectorDetailDto: UpdateDirectorDetailDto) {
    return this.directorDetailService.update(updateDirectorDetailDto);

}
}
