import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    BadRequestException
} from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const requestQuery = context.switchToHttp().getRequest().query;
        const filter = requestQuery.filter;
        const rows = requestQuery.rows;
        const page = requestQuery.page;

        const areRequiredParams =
            typeof filter != 'undefined' &&
            typeof rows != 'undefined' &&
            typeof page != 'undefined';

        if (!areRequiredParams) {
            throw new BadRequestException(
                STATUS_CODES.BadRequestException,
                'Rows, filter, and page are required.'
            );
        }
        const parsedRows = parseInt(rows);
        const parsedPage = parseInt(page);
        const areRowsAndPageIntegers =
            parsedRows == parsedRows && parsedPage == parsedPage;
        if (!areRowsAndPageIntegers) {
            throw new BadRequestException(
                STATUS_CODES.BadRequestException,
                'Rows and page must be integers.'
            );
        }
        return next.handle();
    }
}
