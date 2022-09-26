import { Test, TestingModule } from '@nestjs/testing';
import { CibilDetService } from './cibil_det.service';

describe('CibilDetService', () => {
  let service: CibilDetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CibilDetService],
    }).compile();

    service = module.get<CibilDetService>(CibilDetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
