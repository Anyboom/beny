import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientErrorFilter implements ExceptionFilter {
  exceptions = {
    notFound: {
      code: 'P2025',
      status: HttpStatus.NOT_FOUND,
      message: 'Not found',
    },
    foreignKeyFailed: {
      code: 'P2003',
      status: HttpStatus.NOT_FOUND,
      message: 'Not found',
    },
  };

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    let status = HttpStatus.BAD_REQUEST;
    let message = 'Unexpected error';

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case this.exceptions.notFound.code:
        status = this.exceptions.notFound.status;
        message = this.exceptions.notFound.message;
        break;
      case this.exceptions.foreignKeyFailed.code:
        status = this.exceptions.foreignKeyFailed.status;
        message = this.exceptions.foreignKeyFailed.message;
        break;
    }

    this.httpAdapterHost.httpAdapter.reply(
      response,
      {
        statusCode: status,
        message: message,
      },
      status,
    );
  }
}
