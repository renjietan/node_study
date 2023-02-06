import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  const APP_NAME = process.env.npm_package_name;
  const APP_VERSION = process.env.npm_package_version;
  const options = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(`${APP_NAME} API文档`)
    .setVersion(APP_VERSION)
    .build();
  // options["operationIdFactory"] = (
  //   controllerKey: string,
  //   methodKey: string
  // ) => methodKey
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
