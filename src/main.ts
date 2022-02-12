import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

//import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //const express = app.getHttpAdapter().getInstance();

  //const views = join(__dirname, '..', 'views');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  //app.setBaseViewsDir(views);
  app.setViewEngine('hbs');
  //nunjucks.configure(views, { express });
  //app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();
