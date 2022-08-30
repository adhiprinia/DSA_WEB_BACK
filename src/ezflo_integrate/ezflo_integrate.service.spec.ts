import { Test, TestingModule } from '@nestjs/testing';
import { EzfloIntegrateService } from './ezflo_integrate.service';

describe('EzfloIntegrateService', () => {
  let service: EzfloIntegrateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EzfloIntegrateService],
    }).compile();

    service = module.get<EzfloIntegrateService>(EzfloIntegrateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
