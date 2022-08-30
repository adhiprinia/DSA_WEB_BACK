import { Module } from '@nestjs/common';
import { BankDetailService } from './bank_detail.service';
import { BankDetailController } from './bank_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankDetail } from './entities/bank_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BankDetail])],
  controllers: [BankDetailController],
  providers: [BankDetailService]
})
export class BankDetailModule {}
