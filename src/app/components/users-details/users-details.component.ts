import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserDetailsInterface} from "../../interfaces/user-details.interface";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  userDetails: UserDetailsInterface;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.userDetails = data)
  }

}
