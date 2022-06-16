import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserInterface} from "../../../../interfaces/user.interface";
import {UsersServices} from "../users -services";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<UserInterface[]> {

  constructor(private usersServices: UsersServices) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.usersServices.getUsers();
  }
}
