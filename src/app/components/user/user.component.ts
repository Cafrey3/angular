import {Component, Input, OnInit} from '@angular/core';

import {IUser} from "../../interfaces/IUser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  users: IUser

  constructor() {
  }

  ngOnInit(): void {
  }

}
