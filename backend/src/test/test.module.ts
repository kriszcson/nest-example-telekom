import { Module } from '@nestjs/common';
import { TestInterceptor } from 'src/interceptors/test.interceptor';
import { TestReaderController } from './controllers/test-reader.controller';
import { TestController } from './controllers/test.controller';
import { TestReaderService } from './services/test-reader.service';
import { TestService } from './services/test.service';

@Module({
    imports: [],
    controllers: [TestController, TestReaderController],
    providers: [TestService, TestReaderService, TestInterceptor],
    exports: [TestModule]
})
export class TestModule { }
