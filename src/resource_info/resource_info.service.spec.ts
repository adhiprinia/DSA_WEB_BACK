import { Test, TestingModule } from '@nestjs/testing';
import { ResourceInfoService } from './resource_info.service';

describe('ResourceInfoService', () => {
  let service: ResourceInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResourceInfoService],
    }).compile();

    service = module.get<ResourceInfoService>(ResourceInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
