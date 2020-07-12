import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Chat } from '../chat-group/chat-group.model';
import { ChatGroupService } from '../chat-group/chat-group.service';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  chatobj: Chat;
  constructor(private authService: AuthService, 
    private chatService:ChatGroupService,
    private router: Router,
    private dataStroreService: DataStorageService,
    private chatGroupService: ChatGroupService) { }

  ngOnInit(): void {
    this.dataStroreService.fetchUser().subscribe(
      chats => {
                this.chatGroupService.getUser(chats);
            }
    );
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
}
  onSubmit(form: NgForm) {
    console.log(form.value['username']);
    if(!form.valid){
        return;
    }
    
    const username = form.value['username'];
   
    const email = form.value['email'];
    const password = form.value['password'];

    //console.log(email,password);
    let authObs: Observable<AuthResponseData>;
    
    if(this.isLoginMode){
        authObs = this.authService.login(email,password);
    }
    else{
        authObs = this.authService.signUp(email,password);
        
         this.chatService.addnewUser(email,username);
         this.dataStroreService.storeuser();
    }
    this.chatService.email = email;
    authObs.subscribe(
        resData => {
            console.log(resData);
            this.dataStroreService.fetchUser().subscribe(
              chats => {
                        this.chatGroupService.getUser(chats);
                    }
            );
            this.router.navigate(['/chat']);
        },
        error => {
            console.error(error)
        }
    );
    form.reset();
  }
}
