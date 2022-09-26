import { Test, TestingModule } from '@nestjs/testing';
import { ResourceInfoUploadService } from './resource_info_upload.service';

describe('ResourceInfoUploadService', () => {
  let service: ResourceInfoUploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceInfoUploadService],
    }).compile();

    service = module.get<ResourceInfoUploadService>(ResourceInfoUploadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
