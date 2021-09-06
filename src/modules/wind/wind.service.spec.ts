import { Test, TestingModule } from '@nestjs/testing';
import { WindService } from './wind.service';

describe('WindService', () => {
  let service: WindService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WindService],
    }).compile();

    service = module.get<WindService>(WindService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
