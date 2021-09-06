import { ApiProperty } from '@nestjs/swagger';

import type { BasicEntity } from '../basic.entity';

export class BasicDto {
  @ApiProperty()
  id: number;

  constructor(entity: BasicEntity) {
    this.id = entity.id;
  }
}
