import { Module,NestModule , MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { TypeOrmAsyncConfig } from './configs/typeorm.config';
import { AuthMiddleware } from './common/middleware/auth.middleware';

@Module({
  imports: [AuthModule, UserModule,
    TypeOrmModule.forRootAsync(TypeOrmAsyncConfig),
    TypeOrmModule.forFeature([UserEntity]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST }
      )
      .forRoutes('*');
  }
}
