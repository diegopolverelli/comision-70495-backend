import { IsNumber, IsOptional, IsString, IsStrongPassword } from "class-validator"

export class CreateProductoDto {

    @IsString({message: `Title es requerido, y tiene que ser una cadena de caracteres`})
    title:string

    @IsString()
    // @IsStrongPassword()
    descrip:string

    @IsNumber()
    @IsOptional()
    price?:number
    

    @IsNumber()
    stock:number
}
