import {
  CreateDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UtilsProvider } from '../providers/utils.provider';
import { BasicDto } from './dto/basic.dto';

export abstract class BasicEntity<DTO extends BasicDto = BasicDto> {
  @PrimaryGeneratedColumn('increment')
  id: number;

  abstract dtoClass: new (
    entity: BasicDto
  ) => DTO;

  toDto<D = DTO>(options?: GetConstructorArgs<D>[1]): DTO {
    return UtilsProvider.toDto(this.dtoClass, this, options);
  }
}
