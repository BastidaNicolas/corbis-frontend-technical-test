import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { ReplyCardComponent } from './components/reply-card/reply-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    HeaderComponent,
    RightSidebarComponent,
    DrawerComponent,
    CommentCardComponent,
    ReplyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
