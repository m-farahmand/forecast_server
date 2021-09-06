import { Module } from '@nestjs/common';
import { WindService } from './wind.service';

@Module({
  providers: [WindService]
})
export class WindModule {}
