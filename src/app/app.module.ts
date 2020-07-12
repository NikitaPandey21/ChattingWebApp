import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatGroupComponent } from './chat-group/chat-group.component';
import { ChatBoxComponent } from './chat-group/chat-box/chat-box.component';
import { ChatListComponent } from './chat-group/chat-list/chat-list.component';
import { ChatStartComponent } from './chat-group/chat-start/chat-start.component';
import { ChatsComponent } from './chat-group/chat-list/chats/chats.component';
import { ChatBarComponent } from './chat-group/chat-box/chat-bar/chat-bar.component';
import { AuthComponent } from './auth/auth.component';
import { SortPipe } from './chat-group/chat-list/sort.pipe';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatGroupComponent,
    ChatBoxComponent,
    ChatListComponent,
    ChatStartComponent,
    ChatsComponent,
    ChatBarComponent,
    AuthComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
