import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../classes/post';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  posts: Array<Post> = new Array<Post>();
  storageStatus: any ;

  constructor(private router: Router, private postService: PostsService) {}


  ngOnInit() {
    // this.postService.getAllPosts().subscribe(data => {
    //   console.log(data);
    //   this.posts = data;
    // });
  }

}
