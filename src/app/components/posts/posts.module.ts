import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts-components/posts/posts.component';
import {PostComponent} from "../post/post.component";
import {PostsService} from "./posts-services/posts.service";
import {PostDetailsComponent} from "../post-details/post-details.component";
import {PostsResolver} from "./posts-services/resolves/posts.resolver";
import {PostDetailsResolver} from "./posts-services/resolves/post-details.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PostsService,
    PostsResolver,
    PostDetailsResolver
  ]
})
export class PostsModule {
}
