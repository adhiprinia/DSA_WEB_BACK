import { Test, TestingModule } from '@nestjs/testing';
import { ResourceInfoController } from './resource_info.controller';
import { ResourceInfoService } from './resource_info.service';

describe('ResourceInfoController', () => {
  let controller: ResourceInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceInfoController],
      providers: [ResourceInfoService],
    }).compile();

    controller = module.get<ResourceInfoController>(ResourceInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
