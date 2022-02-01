import {
    Controller,
    Get,
    Query,
    Param,
    Post,
    Req,
    Request,
    Put,
    UseInterceptors
} from '@nestjs/common';

import { FilteringRowsDto } from 'src/dtos/filtering-rows.dto';
import { TestInterceptor } from 'src/interceptors/test.interceptor';
import { TestService } from '../services/test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) { }

    @UseInterceptors(TestInterceptor)
    @Get()
    async filteringRows(
        @Query('filter') filter: string,
        @Query('rows') rows: string,
        @Query('page') page: string
    ): Promise<object> {
        const parsedRows = parseInt(rows);
        const parsedPage = parseInt(page);

        const filteringRowsDto: FilteringRowsDto = {
            filter,
            rows: parsedRows,
            page: parsedPage
        };
        return await this.testService.filteringRowsService(filteringRowsDto);
    }

    @Get(':key')
    async getKey(@Param('key') key: string): Promise<object> {
        return await this.testService.getKeyService(key);
    }

    @Post()
    async postingTest(@Req() req: Request): Promise<object> {
        const requestBody = req.body;
        return await this.testService.postingTestService(requestBody);
    }

    @Put(':key')
    async puttingKey(@Req() req: Request, @Param('key') key: string): Promise<object> {
        const requestBody = req.body;
        return await this.testService.puttingKeyService(key, requestBody);
    }
}
