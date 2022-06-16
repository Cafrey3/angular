import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {CommentInerface} from "../../../interfaces/comment.inerface";
import {CommentDetailsInterface} from "../../../interfaces/comment-details.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url = "https://jsonplaceholder.typicode.com/comments";

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentInerface[]> {
    return this.http.get<CommentInerface[]>(this._url)
  }

  getComment(id: string): Observable<CommentDetailsInterface[]> {
    return this.http.get<CommentDetailsInterface[]>(this._url + '/' + id)
  }
}
