import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HRController } from './h-r/h-r.controller';

@Module({
  controllers: [AppController, HRController],
  providers: [AppService],
})
export class AppModule {}
