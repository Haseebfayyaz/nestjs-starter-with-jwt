import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { TypeOrmAsyncConfig } from './configs/typeorm.config';

@Module({
  imports: [AuthModule, UserModule,
    TypeOrmModule.forRootAsync(TypeOrmAsyncConfig),
    TypeOrmModule.forFeature([UserEntity]), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
