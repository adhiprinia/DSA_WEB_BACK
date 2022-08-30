import { Test, TestingModule } from '@nestjs/testing';
import { DirectorDetailService } from './director_detail.service';

describe('DirectorDetailService', () => {
  let service: DirectorDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectorDetailService],
    }).compile();

    service = module.get<DirectorDetailService>(DirectorDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
