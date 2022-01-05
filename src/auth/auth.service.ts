import { Injectable } from '@nestjs/common';
import { EmployeeService } from 'src/employee/employee.service';
import {JwtService} from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(private userService:EmployeeService,private jwtService:JwtService){}
    async validateUser(username:string,password:string):Promise<any>
    {
        const user=await this.userService.getUsernae(username);
        if(user && password===user.password)
        {
             const {password,username, ...rest}=user;
            return rest;
        }
        return null;
    }

    async login(user: any){
        const payload={name:user.nombre,sub:user.id};
        return {
            acces_token: this.jwtService.sign(payload),
        };
    }
}
