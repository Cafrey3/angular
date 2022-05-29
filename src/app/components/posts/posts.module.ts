import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostComponent} from "../post/post.component";
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./posts-services/posts.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[PostsService]
})
export class PostsModule {
}