import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./.env"}),
    MongooseModule.forRoot(process.env.MONGO_URL!, {
      dbName: process.env.DB_NAME
    }),
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  constructor(){
    Logger.debug("DB: " + process.env.DB_NAME, "AppModule")
    Logger.debug("Server Mongo DB Atlas: " + process.env.MONGO_URL , "AppModule")
  }

  configure(consumer: MiddlewareConsumer) {

    consumer.apply(LoggerMiddleware).forRoutes({path:"*", method: RequestMethod.ALL})
    // throw new Error('Method not implemented.');
  }
}
