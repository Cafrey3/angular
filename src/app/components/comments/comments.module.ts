import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments components/comments/comments.component';
import {CommentComponent} from "../comment/comment.component";
import {CommentsService} from "./comments-services/comments.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers:[CommentsService]
})
export class CommentsModule { }
