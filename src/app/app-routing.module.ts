import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatGroupComponent } from './chat-group/chat-group.component';
import { ChatBoxComponent } from './chat-group/chat-box/chat-box.component';
import { ChatStartComponent} from './chat-group/chat-start/chat-start.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
    { path: 'chat', component: ChatGroupComponent, children: [
        { path: '', component: ChatStartComponent },
        { path: ':id', component: ChatBoxComponent },
    ] },

    { path:'auth', component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
