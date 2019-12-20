import { CreatePostDto } from './../dtos/CreatePostDto';
import { PostEntity } from './../entities/PostEntity';
import { PostModel } from './../models/PostModel';
import { Injectable } from '@nestjs/common';
import { Observable, of, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ) { }

    public findAll(): Observable<PostEntity[]> {
        return from(this.postRepository.find());
    }

    public create(createPostDto: CreatePostDto) {
       return this.postRepository.save(createPostDto);
    }
}