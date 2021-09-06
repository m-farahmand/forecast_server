import { Test, TestingModule } from '@nestjs/testing';
import { WindController } from './wind.controller';

describe('WindController', () => {
  let controller: WindController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WindController],
    }).compile();

    controller = module.get<WindController>(WindController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
