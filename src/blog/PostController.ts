import { CreatePostDto } from './dtos/CreatePostDto';
import { PostEntity } from './entities/PostEntity';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostModel } from './models/PostModel';
import { PostService } from './services/PostService';
import { InjectRepository } from '@nestjs/typeorm';


@Controller('posts')
export class PostController {
    constructor(private postService: PostService) { }
    
    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }
        
    @Post()
    public async create(
        @Body() createPostDto: CreatePostDto
    ){
        console.log(createPostDto);
        return this.postService.create(createPostDto);
    }
}

//Please create multiple controller class for more routing. It shouldn't be used
//single controller for all routing urls.
//We shouldn't write the business logic also here. Just keep them inside the
// Service or other and call the service from here.