import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-components/users/users.component';
import {UsersServices} from "./users-services/users -services";
import {UserComponent} from "../user/user.component";
import {UsersDetailsComponent} from "../users-details/users-details.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersDetailsComponent
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
