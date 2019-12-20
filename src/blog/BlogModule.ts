import { PostEntity } from './entities/PostEntity';

import { Module } from '@nestjs/common';
import { PostController } from './PostController';
import { PostService } from './services/PostService';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]), 
    ],

    controllers: [
        PostController
    ],

    providers: [
        PostService
    ],
})
export class BlogModule { };