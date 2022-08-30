import { Test, TestingModule } from '@nestjs/testing';
import { DirectorDetailController } from './director_detail.controller';
import { DirectorDetailService } from './director_detail.service';

describe('DirectorDetailController', () => {
  let controller: DirectorDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectorDetailController],
      providers: [DirectorDetailService],
    }).compile();

    controller = module.get<DirectorDetailController>(DirectorDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
