import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {UserComponent} from './components/user/user.component';
import {PostComponent} from './components/post/post.component';
import {CommentComponent} from './components/comment/comment.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {UserdetailsComponent} from './components/userdetails/userdetails.component';
import {PostdetailsComponent} from './components/postdetails/postdetails.component';
import {CommentdetailsComponent} from './components/commentdetails/commentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    HomeComponent,
    UserdetailsComponent,
    PostdetailsComponent,
    CommentdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home/page', component: HomeComponent},
      {
        path: 'users/page', component: UsersComponent,
        children: [
          {path: 'user/details/:id', component: UserdetailsComponent}
        ]
      },
      {
        path: 'posts/page', component: PostsComponent,
        children: [
          {path: 'post/details/:id', component: PostdetailsComponent}
        ]
      },
      {
        path: 'comments/page', component: CommentsComponent,
        children: [
          {path: 'comment/details/:id', component: CommentdetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
