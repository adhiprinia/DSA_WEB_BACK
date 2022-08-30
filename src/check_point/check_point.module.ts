import { Module } from '@nestjs/common';
import { CheckPointService } from './check_point.service';
import { CheckPointController } from './check_point.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckPoint } from './entities/check_point.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CheckPoint])],
  controllers: [CheckPointController],
  providers: [CheckPointService]
})
export class CheckPointModule {}
