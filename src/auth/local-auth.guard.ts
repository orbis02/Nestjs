import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local"){
//SI QUEREMOS ACTIVAR LAS SESIONES DEBE DESCOMENTAR ESTAS LINEAS.... 
    // async canActivate(context: ExecutionContext): Promise<boolean>{
       
    //     const result=(await super.canActivate(context) as boolean )

    //     const request=context.switchToHttp().getRequest();

    //     await super.logIn(request);
    //     return result;
    // }
}

//Agregar comentarios