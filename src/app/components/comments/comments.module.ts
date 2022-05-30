import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments components/comments/comments.component';
import {CommentComponent} from "../comment/comment.component";
import {CommentsService} from "./comments-services/comments.service";
import {CommentsDetailsComponent} from "../comments-details/comments-details.component";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentsDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [CommentsService]
})
export class CommentsModule {
}
