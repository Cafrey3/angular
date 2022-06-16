import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {PostInterface} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.post = data);
  }
}
