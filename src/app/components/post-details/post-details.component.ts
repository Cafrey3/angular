import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostsService} from "../posts/posts-services/posts.service";
import {PostInterface} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostInterface;

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postsService.getPost(id).subscribe(value => this.post = value);
    });
  }

}
