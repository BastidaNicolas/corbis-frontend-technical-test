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
import { HttpClientModule } from '@angular/common/http';
import { MainSectionComponent } from './components/section/main-section/main-section.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    HeaderComponent,
    RightSidebarComponent,
    DrawerComponent,
    CommentCardComponent,
    ReplyCardComponent,
    MainSectionComponent,
    TableComponent,
    SearchPipePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule],
})
export class AppModule {}
