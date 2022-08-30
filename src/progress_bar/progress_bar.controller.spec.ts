import { Test, TestingModule } from '@nestjs/testing';
import { ProgressBarController } from './progress_bar.controller';
import { ProgressBarService } from './progress_bar.service';

describe('ProgressBarController', () => {
  let controller: ProgressBarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgressBarController],
      providers: [ProgressBarService],
    }).compile();

    controller = module.get<ProgressBarController>(ProgressBarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
