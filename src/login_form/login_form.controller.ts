import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginFormService } from './login_form.service';
import { CreateLoginFormDto } from './dto/create-login_form.dto';
import { UpdateLoginFormDto } from './dto/update-login_form.dto';
import { ApiResponse } from 'src/config/response';
import { LoginForm } from './entities/login_form.entity';
import { DeleteResult } from 'typeorm';

@Controller('login_form')
export class LoginFormController {
  constructor(private readonly loginFormService: LoginFormService) {}

  @Post('create')
  create(@Body()body) {
    console.log(body)
    return this.loginFormService.create(body);
  }

  // @Post('findAll')
  // findAll() :Promise<ApiResponse<LoginForm[]>>{
  //   return this.loginFormService.findAll();
  // }

  // @Post('findOne')
  // findOne(@Body('id') id: string):Promise<ApiResponse<LoginForm>> {
  //   return this.loginFormService.findOne(id);
  // }

  // @Post('update')
  // update( @Body() updateLoginFormDto: UpdateLoginFormDto):Promise<ApiResponse<LoginForm>> {
  //   return this.loginFormService.update( updateLoginFormDto);
  // }

  // @Post('delete')
  // remove(@Body('id') id: string):Promise<ApiResponse<DeleteResult>> {
  //   return this.loginFormService.remove(id);
  // }
}
