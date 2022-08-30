import { Test, TestingModule } from '@nestjs/testing';
import { LoginFormController } from './login_form.controller';
import { LoginFormService } from './login_form.service';

describe('LoginFormController', () => {
  let controller: LoginFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginFormController],
      providers: [LoginFormService],
    }).compile();

    controller = module.get<LoginFormController>(LoginFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
