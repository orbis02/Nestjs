import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { EmployeeModule } from 'src/employee/employee.module';
import { employeeRepository } from 'src/employee/employee.repository';
import { EmployeeService } from 'src/employee/employee.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import {JwtModule} from '@nestjs/jwt';
import { authenticate } from 'passport';
import {SECRET_KEY} from '../config/config';

import { JwtStrategy } from './jwt.strategy';

@Module({
  //SI DESEAMOS AGRAGAR AUTENTICACION CON SESIONES DESCOMENTAR ESTAS LINEAS.
  //imports:[EmployeeModule,PassportModule,PassportModule.register({session:true})],
    // providers: [AuthService,LocalStrategy,SessionSerializer],
  imports:[EmployeeModule,PassportModule,PassportModule,JwtModule.register({
    secret:SECRET_KEY,
    signOptions:{expiresIn:'60s'}
  })],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
  
})
export class AuthModule {}
