import { Test, TestingModule } from '@nestjs/testing';
import { DocumentUploadController } from './document_upload.controller';
import { DocumentUploadService } from './document_upload.service';

describe('DocumentUploadController', () => {
  let controller: DocumentUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentUploadController],
      providers: [DocumentUploadService],
    }).compile();

    controller = module.get<DocumentUploadController>(DocumentUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
