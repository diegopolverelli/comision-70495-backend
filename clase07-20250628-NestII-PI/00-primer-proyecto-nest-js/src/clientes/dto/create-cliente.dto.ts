import { IsEmail, IsString } from "class-validator"

export class CreateClienteDto {

    @IsString()
    nombre: string

    @IsEmail()
    email:string
}
