import {Component, OnInit} from '@angular/core';

import {UsersServices} from "../../users-services/users -services";
import {IUser} from "../../../../interfaces/IUser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];


  constructor(private userService: UsersServices) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

}
