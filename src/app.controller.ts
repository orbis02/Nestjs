import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly authServices: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    return this.authServices.login(req.user); //RETURN TOKEN 
  }
  // @UseGuards(AuthenticatedGuard) //si deseamos agregar proteccion en los controladores con sesiones descomentar estas lineas.
  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@Request() req): any { //PASAR UN TOKEN.
    return req.user;
  }
}
