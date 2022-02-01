import { Module } from '@nestjs/common';
import { TestInterceptor } from 'src/interceptors/test.interceptor';
import { TestReaderController } from './controllers/test-reader.controller';
import { TestController } from './controllers/test.controller';
import { TestReaderService } from './services/test-reader.service';
import { TestService } from './services/test.service';

@Module({
    imports: [],
    //To work routing well don't change the order of the controllers imports.  
    controllers: [TestReaderController, TestController],
    providers: [TestService, TestReaderService, TestInterceptor],
    exports: [TestModule]
})
export class TestModule { }
