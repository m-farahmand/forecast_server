import { ApiPropertyOptional } from '@nestjs/swagger';
import { BasicDto } from '../../../common/dto/basic.dto';

import { WindEntity } from '../wind.entity';

export class WindDto extends BasicDto {
    @ApiPropertyOptional()
    header: any;

    @ApiPropertyOptional()
    data: any[];

    constructor(wind: WindEntity) {
        super(wind);
        this.header = wind.header;
        this.data = wind.data;
    }
}
