import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authServer: AuthService) {
        super();//config
    }
    async validate(username:string,pasword:string):Promise<any>{
        const user=await this.authServer.validateUser(username,pasword);
        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}
//Agregar comentarios