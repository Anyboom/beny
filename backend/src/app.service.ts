import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { key: string } {
    return { key: 'Hello World!' };
  }
}
