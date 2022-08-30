import { Test, TestingModule } from '@nestjs/testing';
import { ReferenceDetailController } from './reference_detail.controller';
import { ReferenceDetailService } from './reference_detail.service';

describe('ReferenceDetailController', () => {
  let controller: ReferenceDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferenceDetailController],
      providers: [ReferenceDetailService],
    }).compile();

    controller = module.get<ReferenceDetailController>(ReferenceDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
