import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SECRET_KEY, SERVER_PORT} from './config/config';
import * as session from 'express-session';
import * as passport from 'passport';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService=await app.get(ConfigService);
  //SI DESEAMOS CONFIGURAR SESIONES descomentar estas lineas.
  //  app.use(
  //     session(
  //     {
  //       secret: configService.get<string>(SECRET_KEY),
  //       resave:false,
  //       saveUninitialized:false,
  //       cookie:{ maxAge:3600000}

  //     }),
  //     passport.initialize(),
  //     passport.session()
 
  // );



  const port =configService.get<number>(SERVER_PORT);
  
  await app.listen(port);
}
bootstrap();
//Agregar comentarios
