import { Test, TestingModule } from '@nestjs/testing';
import { CibilDetController } from './cibil_det.controller';
import { CibilDetService } from './cibil_det.service';

describe('CibilDetController', () => {
  let controller: CibilDetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CibilDetController],
      providers: [CibilDetService],
    }).compile();

    controller = module.get<CibilDetController>(CibilDetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
