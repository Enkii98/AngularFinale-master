import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:4201/posts');
    }

    addPost(data: { title: string; body: string }) {
       return this.http.post('http://localhost:4201/posts', data);
    }
}

export async function detailsPosts(): Promise<Post[]> {
    return await (await fetch('http://localhost:4201/posts')).json()
}
