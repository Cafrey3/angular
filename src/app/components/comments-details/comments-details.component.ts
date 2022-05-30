import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentDetailsInterface} from "../../interfaces/comment-details.interface";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {

  commentDetails: CommentDetailsInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(()=> {
      let {state: {data}} = history;
      this.commentDetails = data as CommentDetailsInterface;
    });
  }

}
