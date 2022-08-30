import { Test, TestingModule } from '@nestjs/testing';
import { FactDsaApplicantDetailService } from './fact_dsa_applicant_detail.service';

describe('FactDsaApplicantDetailService', () => {
  let service: FactDsaApplicantDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactDsaApplicantDetailService],
    }).compile();

    service = module.get<FactDsaApplicantDetailService>(FactDsaApplicantDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
