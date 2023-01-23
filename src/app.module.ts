import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm.options.factory';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}