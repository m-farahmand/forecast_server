import { Injectable } from '@nestjs/common';
import { WindEntity } from './wind.entity';
import { WindDto } from './dto/wind-dto';
import { PageDto } from 'common/dto/page.dto';
import windJson from './wind.json';
@Injectable()
export class WindService {
    //@TODO get from external services or sensors
    async getData(): Promise<WindDto[]> {
        var data = [];
        debugger
        for (let i = 1; i < 3; i++) {
            const dto = new WindEntity();
            dto.header = { "discipline": 0, "gribEdition": 2, "gribLength": 76170, "center": 7, "subcenter": 0, "refTime": "2018-06-24T00:00:00.000Z", "significanceOfRT": 1, "productStatus": 0, "productType": 1, "productDefinitionTemplate": 0, "parameterCategory": i, "parameterNumber": i + 1, "parameterUnit": "m.s-1", "genProcessType": 2, "forecastTime": 0, "surface1Type": 103, "surface1Value": 100, "surface2Type": 255, "surface2Value": 0, "gridDefinitionTemplate": 0, "numberPoints": 65160, "shape": 6, "gridUnits": "degrees", "resolution": 48, "winds": "true", "scanMode": 0, "nx": 360, "ny": 181, "basicAngle": 0, "lo1": 0, "la1": 90, "lo2": 359, "la2": -90, "dx": 1, "dy": 1 };
            dto.data = windJson.data;
            data[i] = dto.toDto();
        }
        return data;
    }
}
