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
        const rows = parseInt(requestQuery.rows);
        const page = parseInt(requestQuery.page);

        const isRequestDataValid =
            rows == rows && page == page && typeof filter != "undefined"
        if (!isRequestDataValid) {
            const errorMessage = 'Rows, page, and filter are required, rows and page must be integers.'
            console.error(errorMessage);
            throw new BadRequestException(
                STATUS_CODES.BadRequestException,
                errorMessage
            );
        }
        return next.handle();
    }
}
