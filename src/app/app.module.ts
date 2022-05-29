import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from './components/header/menu/menu.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostDetailsComponent,
    UsersDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
