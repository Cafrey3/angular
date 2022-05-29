import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersServices} from "./users-services/users -services";
import {UserComponent} from "../user/user.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [UsersServices]
})
export class UsersModule {
}
