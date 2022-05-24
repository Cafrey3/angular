import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPostDetails} from "../../interfaces/IPostDetails";

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  postDetails: IPostDetails

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.postDetails = data as IPostDetails;
    })
  }

}
