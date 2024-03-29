import { BasicEntity } from '../../common/basic.entity';
import { Column, Entity } from 'typeorm';

import { WindDto } from './dto/wind-dto';

@Entity({ name: 'winds' })
export class WindEntity extends BasicEntity<WindDto> {
    @Column('json')
    header: any;
    @Column('jsonb')
    data: any[];
    dtoClass = WindDto;
}
