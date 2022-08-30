import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceDetailService } from './reference_detail.service';

describe('ReferenceDetailService', () => {
  let service: ReferenceDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferenceDetailService],
    }).compile();

    service = module.get<ReferenceDetailService>(ReferenceDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
