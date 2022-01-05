import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Orbis Vamos por esos dolares !!! yes';
  }
}
