import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users-components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UsersServices} from "./users-services/users -services";
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    AppModule,
  ],
  providers: [UsersServices]
})
export class UsersModule {
}
