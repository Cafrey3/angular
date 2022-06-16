import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {UsersServices} from "../users -services";
import {UserDetailsInterface} from "../../../../interfaces/user-details.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersDetailsResolver implements Resolve<UserDetailsInterface[]> {

  constructor(private usersServices:UsersServices) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserDetailsInterface[]> | Promise<UserDetailsInterface[]> | UserDetailsInterface[] {
    let {id} = route.params
    return this.usersServices.getUser(id);
  }


}
