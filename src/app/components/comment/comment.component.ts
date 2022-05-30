import {Component, Input, OnInit} from '@angular/core';

import {CommentInerface} from "../../interfaces/comment.inerface";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentInerface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
