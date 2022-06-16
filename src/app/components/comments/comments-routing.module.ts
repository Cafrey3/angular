import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentsComponent} from "./comments components/comments/comments.component";
import {CommentsDetailsComponent} from "../comments-details/comments-details.component";
import {CommentsResolver} from "./comments-services/resolves/comments.resolver";
import {CommentDetailsResolver} from "./comments-services/resolves/comment-details.resolver";

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    resolve: {data: CommentsResolver},
    children: [
      {
        path: ':id', component: CommentsDetailsComponent,
        resolve: {data: CommentDetailsResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {
}
