import { Document } from "mongoose";

export interface Tasks extends Document {
        id:number;
        title:string;
        description:string;
        done:boolean;
        
}
//Agregar comentarios
