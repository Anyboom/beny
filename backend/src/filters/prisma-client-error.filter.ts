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
        message = 'Not found';
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
