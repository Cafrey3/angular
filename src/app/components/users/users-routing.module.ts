import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./users-components/users/users.component";
import {UsersDetailsComponent} from "../users-details/users-details.component";
import {UsersResolver} from "./users-services/resolves/users.resolver";
import {UsersDetailsResolver} from "./users-services/resolves/users-details.resolver";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {data: UsersResolver},
    children: [
      {
        path: ':id', component: UsersDetailsComponent,
        resolve: {data: UsersDetailsResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
