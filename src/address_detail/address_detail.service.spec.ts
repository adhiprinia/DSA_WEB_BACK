import { Test, TestingModule } from '@nestjs/testing';
import { AddressDetailService } from './address_detail.service';

describe('AddressDetailService', () => {
  let service: AddressDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressDetailService],
    }).compile();

    service = module.get<AddressDetailService>(AddressDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
