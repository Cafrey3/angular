import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {UserInterface} from "../../../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})

export class UsersServices {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this._url);
  }
  getUser(id: string): Observable<UserInterface> {
    return this.http.get<UserInterface>(this._url + '/' + id);
  }
}
