import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MenuComponent} from "./components/header/menu/menu.component";

let routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'users', loadChildren: () => import('./components/users/users.module').then(v => v.UsersModule)},
  {path: 'posts', loadChildren: () => import('./components/posts/posts.module').then(v => v.PostsModule)},
  {path: 'comments', loadChildren: () => import('./components/comments/comments.module').then(v => v.CommentsModule)}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule,
  ]
})


export class AppRoutingModule {

}
