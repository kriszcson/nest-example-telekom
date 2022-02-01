import { Injectable } from '@nestjs/common';

import { FilteringRowsDto } from '../../dtos/filtering-rows.dto';

@Injectable()
export class TestService {
    appName = process.env.APP_NAME;

    async filteringRowsService(filteringRowsDto: FilteringRowsDto): Promise<object> {
        return {
            appName: this.appName,
            filter: filteringRowsDto.filter,
            ...filteringRowsDto
        };
    }

    async getKeyService(key: string): Promise<object> {
        return {
            key,
            appname: this.appName
        };
    }

    async postingTestService(requestBody: object): Promise<object> {
        const keyOfACtualTime = new Date().getTime().toString();
        return {
            requestBody,
            key: keyOfACtualTime,
            appName: this.appName
        };
    }

    async puttingKeyService(key: string, requestBody: object): Promise<object> {
        return {
            requestBody,
            key,
            appName: this.appName
        };
    }
}
