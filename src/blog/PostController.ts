import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostModel } from './models/postModel';
import { PostService } from './services/PostService';


@Controller('posts')
export class PostController {
    constructor(private postService: PostService) { }

    @Get('all')
    findAll(): Observable<PostModel[]> {
        return this.postService.findAll();
    }

    @Get('start')
    myFunc(): any {
        return "Bismillahir Rahmanir Rahim";
    }
}
//Please create multiple controller class for more routing. It shouldn't be used
//single controller for all routing urls.
//We shouldn't write the business logic also here. Just keep them inside the\
// Service or other and call the service from here.