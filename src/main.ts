import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from "process";
import {
  ValidationPipe,
  ClassSerializerInterceptor,
  Logger,
} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 4000);
  const url = (await app.getUrl()).replace("[::1]", "localhost");
  Logger.verbose(
    `Swagger document dark version is running on: ${url}/darkDocs`
  );
}
bootstrap();
