import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Chat } from '../chat-group/chat-group.model';
import { ChatGroupService } from '../chat-group/chat-group.service';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  chatobj: Chat[];
  error: string = null;
  LoggedUser:string;

  constructor(private authService: AuthService, 
    private chatService:ChatGroupService,
    private router: Router,
    private dataStroreService: DataStorageService,
    private chatGroupService: ChatGroupService,
    private cookieService:CookieService) { }

  ngOnInit(): void {
    this.dataStroreService.fetchUser().subscribe(
      chats => {
                this.chatGroupService.getUser(chats);
            }
    );
  }

  onSwitchMode(value:any){
    // const mode = (<HTMLInputElement>document.getElementById(signMode)).value;
    this.isLoginMode = value;
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

    this.chatobj = this.chatGroupService.getChatGroup();
    for(var index in this.chatobj){
      if(this.chatobj[index].email == this.chatService.email){
        this.LoggedUser = this.chatobj[index].name;
        break;
      }
    }
    this.cookieService.set('username',this.LoggedUser);


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
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
        }
    );
    form.reset();
  }
}
