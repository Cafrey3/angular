import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MenuComponent} from './components/header/menu/menu.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostDetailsComponent,
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
