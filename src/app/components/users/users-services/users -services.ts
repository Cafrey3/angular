import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IUser} from "../../../interfaces/IUser";

@Injectable({
  providedIn: 'root'
})

export class UsersServices {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }
  getUser(id: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url + '/' + id);
  }
}
