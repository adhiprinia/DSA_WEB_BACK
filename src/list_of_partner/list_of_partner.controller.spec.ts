import { Test, TestingModule } from '@nestjs/testing';
import { ListOfPartnerController } from './list_of_partner.controller';
import { ListOfPartnerService } from './list_of_partner.service';

describe('ListOfPartnerController', () => {
  let controller: ListOfPartnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListOfPartnerController],
      providers: [ListOfPartnerService],
    }).compile();

    controller = module.get<ListOfPartnerController>(ListOfPartnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
