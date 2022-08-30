import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Repository } from 'typeorm';
import { CreateCheckPointDto } from './dto/create-check_point.dto';
import { UpdateCheckPointDto } from './dto/update-check_point.dto';
import { CheckPoint } from './entities/check_point.entity';

@Injectable()
export class CheckPointService {
  constructor(@InjectRepository(CheckPoint)private checkpointRepository:Repository<CheckPoint>){}

  async findPanProof(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.panProof===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findPartnersProof(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.partnersProof===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findAddressProof(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.addressProof===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findPassportSizePhoto(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.passportSizePhoto===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findItReturn(id: string){
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.itReturn===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findBankStatement(id: string){
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.bankStatement===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findEnrolmentLetter(id: string){
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.enrolmentLetter===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findGstRegistration(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.gstRegistration===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findIncorporationDocument(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.incorporationDocument===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 

  async findBoardResolution(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.boardResolution===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 
  async findCancelledChqCopy(id: string) {
    let check_point = await this.checkpointRepository.findOne({where:{checkPointId:id}})
    if(check_point.cancelledChqCopy===""){
      var response = {
        status : 404
      }
    }else {
      var response = {
        status : 200
      }
    }
    return response
  } 
}
