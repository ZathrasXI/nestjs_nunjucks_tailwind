import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();

  const nunjucksOptions: nunjucks.ConfigureOptions = {
    autoescape: true,
    throwOnUndefined: false,
    trimBlocks: false,
    lstripBlocks: false,
    watch: true,
    noCache: process.env.NODE_ENV === 'local' ? true : false,
    express: app,
  };

  const views = join(__dirname, 'views');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(views);
  nunjucks.configure(views, { express });

  const viewEnv = nunjucks.configure(views, nunjucksOptions);
  app.engine('njk', viewEnv.render);
  app.setViewEngine('njk');

  await app.listen(3000);
}
bootstrap();
