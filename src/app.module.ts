import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BlogModule } from './blog/BlogModule';


@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'shamim',
      password: 'konorokom',
      database: 'blogapp',
      // entities: [__dirname + '/blog/entities/PostEntity{.ts,.js}'],
      entities: [__dirname + '/**/**/*{.ts,.js}'],
      synchronize: true,
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
