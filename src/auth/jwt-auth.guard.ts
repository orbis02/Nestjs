import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
//JWT.IO 
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){   
}