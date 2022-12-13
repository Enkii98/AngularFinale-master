import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

    p: Post | undefined
    loading = true;

    constructor(private ar: ActivatedRoute, private pstSrv: PostsService, private router: Router) { }

    ngOnInit(): void {
        let x = this.ar.snapshot.params["id"];
        this.pstSrv.getPosts().subscribe((post: Post[]) => {
            this.loading = false;
            this.p = post.find((element) => {
                if(x == element.id) {
                    return true
                }
                else {
                    return false
                }
            })
        })
    }

    update(form: NgForm) {
        console.log(this.p);
        let post: Post = {
            id: this.p!.id,
            title: this.p!.title,
            body: this.p!.body,
            userId: this.p!.userId
        }
        console.log(post);
        this.pstSrv.updatePost(post).subscribe();
        this.router.navigate(['/post']);
    }

}