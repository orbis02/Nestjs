import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
@Injectable()
export class AuthenticatedGuard implements CanActivate{
    canActivate(context: ExecutionContext) {
        
        const request=context.switchToHttp().getRequest();
        return request.isAuthenticated();



    }

}