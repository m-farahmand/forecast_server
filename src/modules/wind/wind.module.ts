import { Module } from '@nestjs/common';
import { WindService } from './wind.service';
import { WindController } from './wind.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [WindController],
    exports: [WindService],
    providers: [WindService]
})
export class WindModule { }
