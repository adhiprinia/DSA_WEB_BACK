import { Module } from '@nestjs/common';
import { AddressDetailService } from './address_detail.service';
import { AddressDetailController } from './address_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressDetail } from './entities/address_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AddressDetail])],
  controllers: [AddressDetailController],
  providers: [AddressDetailService]
})
export class AddressDetailModule {}
