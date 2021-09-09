import { Controller, HttpCode, Get, HttpStatus } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { WindDto } from './dto/wind-dto';
import { WindService } from './wind.service';
import { PageDto } from '../../common/dto/page.dto';

@Controller('winds')
export class WindController {
    constructor(private windService: WindService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: PageDto, description: 'Get wind data' })
    async getData(): Promise<PageDto<WindDto>> {
        var data = await this.windService.getData();
        if (!data)
            throw new Error('Service not available');
            debugger
        return new PageDto(data, {} as any);
    }
}
