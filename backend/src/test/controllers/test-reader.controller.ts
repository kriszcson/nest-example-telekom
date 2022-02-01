import { Controller, Get } from '@nestjs/common';

import { TestReaderService } from '../services/test-reader.service';

@Controller('test/reader')
export class TestReaderController {
    constructor(private readonly testReaderService: TestReaderService) { }

    @Get()
    async readingFromTelekomResponseDataFile(): Promise<string> {
        return await this.testReaderService.readingFromTelekomResponseDataFileService();
    }
}