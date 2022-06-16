import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {PostInterface} from "../../../../interfaces/post.interface";
import {PostsService} from "../posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolver implements Resolve<PostInterface> {

  constructor(private postsService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface> | Promise<PostInterface> | PostInterface {
    let {id} = route.params
    return this.postsService.getPost(id);
  }
}
