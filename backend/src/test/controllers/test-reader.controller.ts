import { Controller, Get, Header } from '@nestjs/common';

import { TestReaderService } from '../services/test-reader.service';

@Controller('test/reader')
export class TestReaderController {
    constructor(private readonly testReaderService: TestReaderService) { }

    @Header('content-type', 'text/plain')
    @Get()
    async readingFromTelekomResponseDataFile(): Promise<string> {
        return await this.testReaderService.readingFromTelekomResponseDataFileService();
    }
}