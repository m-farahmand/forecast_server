import { ApiPropertyOptional } from '@nestjs/swagger';
import { BasicDto } from 'common/dto/basic.dto';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { WindEntity } from '../wind.entity';

export class WindDto extends BasicDto {
  @ApiPropertyOptional()
  header: string;

 
  constructor(wind: WindEntity) {
    super(wind);
    this.header = wind.header;
  }
}
