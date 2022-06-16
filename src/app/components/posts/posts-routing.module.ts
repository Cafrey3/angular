import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostDetailsComponent} from "../post-details/post-details.component";
import {PostsResolver} from "./posts-services/resolves/posts.resolver";
import {PostDetailsResolver} from "./posts-services/resolves/post-details.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {data: PostsResolver},
    children: [
      {
        path: ':id', component: PostDetailsComponent,
        resolve: {data: PostDetailsResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
