import { Module } from '@nestjs/common';
import { DirectorDetailService } from './director_detail.service';
import { DirectorDetailController } from './director_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectorDetail } from './entities/director_detail.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DirectorDetail])],
  controllers: [DirectorDetailController],
  providers: [DirectorDetailService]
})
export class DirectorDetailModule {}
