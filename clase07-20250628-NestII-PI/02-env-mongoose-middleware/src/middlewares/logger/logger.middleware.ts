import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {

    console.log(`Ha llegado una petición a ${req.url}, con método ${req.method}`)

    next();
  }
}


interface productInterface{
  title: string
  color: string
  price: number
  venta:()=>string
}

let producto01:productInterface
producto01={
  title:"campera", 
  color:"verde",
  price:100, 
  venta:function(){
    return "se vendio el producto...!!!"
  }
}

class ProductoClass implements productInterface{
  stock: number
  title: string
  color: string;
  price: number;

  constructor(title: string, stock:number){
    this.color="verde"
    this.price=100
    this.stock=stock
    this.title=title
  }
  venta: () => "Se vendió...!!!";

  mostrar(){
    return this.title
  }
}