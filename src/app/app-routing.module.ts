import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatGroupComponent } from './chat-group/chat-group.component';
import { ChatBoxComponent } from './chat-group/chat-box/chat-box.component';
import { ChatStartComponent} from './chat-group/chat-start/chat-start.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-gaurd.service';
import { IsLoggedInGuard } from './auth/isLoggedIn-gaurd.service';


const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
    { path: 'chat', component: ChatGroupComponent,canActivate:[AuthGuard],
     children: [
        { path: '', component: ChatStartComponent },
        { path: ':id', component: ChatBoxComponent },
    ] },

    { path:'auth',component:AuthComponent, canActivate:[IsLoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
