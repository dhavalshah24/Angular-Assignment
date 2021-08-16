import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  postsLength = 0;
  page = 1;

  constructor(private _postsService: PostsService) {}

  ngOnInit() {
    this._postsService.getData().subscribe(response => {
      this.posts = response;
      this.postsLength = response.length;
      // console.log(this.posts);
    });
  }

}

// export class Posts {
//   constructor(
//     public userId: number,
//     public id: number,
//     public title: string,
//     public body: string
//   ) {}
// }