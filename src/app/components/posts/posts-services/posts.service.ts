import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PostInterface} from "../../../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _url='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this._url)
  }
  getPost(id: string): Observable<PostInterface> {
    return this.http.get<PostInterface>(this._url + '/' + id);
  }

}
