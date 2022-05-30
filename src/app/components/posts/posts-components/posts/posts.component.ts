import {Component, OnInit} from '@angular/core';

import {PostInterface} from "../../../../interfaces/post.interface";
import {PostsService} from "../../posts-services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostInterface[];

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value)
  }

}
