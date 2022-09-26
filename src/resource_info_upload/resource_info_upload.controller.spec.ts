import { Test, TestingModule } from '@nestjs/testing';
import { ResourceInfoUploadController } from './resource_info_upload.controller';
import { ResourceInfoUploadService } from './resource_info_upload.service';

describe('ResourceInfoUploadController', () => {
  let controller: ResourceInfoUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResourceInfoUploadController],
      providers: [ResourceInfoUploadService],
    }).compile();

    controller = module.get<ResourceInfoUploadController>(ResourceInfoUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
