import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import {SECRET_KEY} from '../config/config';

export class JwtStrategy extends PassportStrategy(Strategy){
//jwt.strategy
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:SECRET_KEY
        })
    }
    async validate(payload:any){
        return {
            id:payload.sub,
            name:payload.name
        }
    }
}