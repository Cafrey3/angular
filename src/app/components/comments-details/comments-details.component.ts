import {Component, OnInit} from '@angular/core';
import {ICommentDetails} from "../../interfaces/ICommentDetails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.commentDetails = data as ICommentDetails;
    });
  }

}
