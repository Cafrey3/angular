import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserDetails} from "../../interfaces/IUserDetails";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      this.userDetails = data as IUserDetails;
    })
  }

}
