import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-components/users/users.component';
import {UsersServices} from "./users-services/users -services";
import {UserComponent} from "../user/user.component";
import {UsersDetailsComponent} from "../users-details/users-details.component";
import {UsersResolver} from "./users-services/resolves/users.resolver";
import {UsersDetailsResolver} from "./users-services/resolves/users-details.resolver";


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
  providers: [
    UsersServices,
    UsersResolver,
    UsersDetailsResolver
  ]
})
export class UsersModule {
}
