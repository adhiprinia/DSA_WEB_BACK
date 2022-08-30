import { Test, TestingModule } from '@nestjs/testing';
import { FactDsaApplicantDetailController } from './fact_dsa_applicant_detail.controller';
import { FactDsaApplicantDetailService } from './fact_dsa_applicant_detail.service';

describe('FactDsaApplicantDetailController', () => {
  let controller: FactDsaApplicantDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactDsaApplicantDetailController],
      providers: [FactDsaApplicantDetailService],
    }).compile();

    controller = module.get<FactDsaApplicantDetailController>(FactDsaApplicantDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
