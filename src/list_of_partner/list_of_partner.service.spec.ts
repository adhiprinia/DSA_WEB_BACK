import { Test, TestingModule } from '@nestjs/testing';
import { ListOfPartnerService } from './list_of_partner.service';

describe('ListOfPartnerService', () => {
  let service: ListOfPartnerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListOfPartnerService],
    }).compile();

    service = module.get<ListOfPartnerService>(ListOfPartnerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
