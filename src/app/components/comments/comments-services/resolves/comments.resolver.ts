import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {CommentInerface} from "../../../../interfaces/comment.inerface";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<CommentInerface[]> {

  constructor(private commentsService:CommentsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentInerface[]> | Promise<CommentInerface[]> | CommentInerface[] {
    return this.commentsService.getComments();
  }


}
