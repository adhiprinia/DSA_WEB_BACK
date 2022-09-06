import { Test, TestingModule } from '@nestjs/testing';
import { EzfloIntegrateController } from './ezflo_integrate.controller';
import { EzfloIntegrateService } from './ezflo_integrate.service';

describe('EzfloIntegrateController', () => {
  let controller: EzfloIntegrateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EzfloIntegrateController],
      providers: [EzfloIntegrateService],
    }).compile();

    controller = module.get<EzfloIntegrateController>(EzfloIntegrateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
