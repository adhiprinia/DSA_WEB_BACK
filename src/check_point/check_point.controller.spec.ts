import { Test, TestingModule } from '@nestjs/testing';
import { CheckPointController } from './check_point.controller';
import { CheckPointService } from './check_point.service';

describe('CheckPointController', () => {
  let controller: CheckPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckPointController],
      providers: [CheckPointService],
    }).compile();

    controller = module.get<CheckPointController>(CheckPointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
