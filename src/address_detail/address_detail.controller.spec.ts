import { Test, TestingModule } from '@nestjs/testing';
import { AddressDetailController } from './address_detail.controller';
import { AddressDetailService } from './address_detail.service';

describe('AddressDetailController', () => {
  let controller: AddressDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressDetailController],
      providers: [AddressDetailService],
    }).compile();

    controller = module.get<AddressDetailController>(AddressDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
