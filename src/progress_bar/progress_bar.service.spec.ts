import { Test, TestingModule } from '@nestjs/testing';
import { ProgressBarService } from './progress_bar.service';

describe('ProgressBarService', () => {
  let service: ProgressBarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgressBarService],
    }).compile();

    service = module.get<ProgressBarService>(ProgressBarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
