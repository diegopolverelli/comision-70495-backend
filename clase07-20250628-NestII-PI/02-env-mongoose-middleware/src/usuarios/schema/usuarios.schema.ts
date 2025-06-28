import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuariosDocument = HydratedDocument<Usuarios>;

@Schema({
    timestamps: true, 
    // strict: false, 
    // collection: "clientesBrasil2022"
})
export class Usuarios {


    @Prop()
    nombre: string;

    @Prop({unique:true})
    email: string;

    @Prop(
        {
            default: 18
        }
    )
    edad?: number;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuarios);
