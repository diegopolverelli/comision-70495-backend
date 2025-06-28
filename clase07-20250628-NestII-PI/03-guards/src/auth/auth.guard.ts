import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwt:JwtService,
    private reflector: Reflector
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean {

    // let roles=this.

    // type reqConUser={
    //   user:any
    // }

    // let req:Request=context.switchToHttp().getRequest()
    let req:any=context.switchToHttp().getRequest()

    let roles=this.reflector.get("roles", context.getHandler())
    console.log(roles)

    // if(!req.query.usuario || !req.query.password) return false

    // if(req.query.usuario != "admin" || req.query.password != "CoderCoder123") return false

    if(!req.headers.authorization) return false

    // BEARER asdfasdf8afsdasfd.asdfasdfkasdfadsf.asdfasdfasdf9asdf9
    let token=req.headers.authorization.split(" ")[1]

    try {
      let usuario=this.jwt.verify(token)
      req.user=usuario

      if(!roles.includes(usuario.rol)) return false

    } catch (error) {
      Logger.error(`Error: ${error.message}`, "AuthGuard")
      return false
    }

    return true;
  }
}
