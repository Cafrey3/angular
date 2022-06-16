import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {CommentDetailsInterface} from "../../../../interfaces/comment-details.interface";
import {CommentsService} from "../comments.service";

@Injectable({
  providedIn: 'root'
})
export class CommentDetailsResolver implements Resolve<CommentDetailsInterface[]> {

  constructor(private commentsService: CommentsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentDetailsInterface[]> | Promise<CommentDetailsInterface[]> | CommentDetailsInterface[] {
    let {id} = route.params;
    return this.commentsService.getComment(id);
  }

}
