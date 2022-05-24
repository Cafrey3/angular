import {Component, OnInit} from '@angular/core';
import {ICommentDetails} from "../../interfaces/ICommentDetails";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-commentdetails',
  templateUrl: './commentdetails.component.html',
  styleUrls: ['./commentdetails.component.css']
})
export class CommentdetailsComponent implements OnInit {

  commentDetails: ICommentDetails

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.commentDetails = data as ICommentDetails;
    })
  }

}
