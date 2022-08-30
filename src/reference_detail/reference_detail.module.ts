import { Module } from '@nestjs/common';
import { ReferenceDetailService } from './reference_detail.service';
import { ReferenceDetailController } from './reference_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferenceDetail } from './entities/reference_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ReferenceDetail])],
  controllers: [ReferenceDetailController],
  providers: [ReferenceDetailService]
})
export class ReferenceDetailModule {}
