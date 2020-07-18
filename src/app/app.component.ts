import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit() {
    this.authService.autoLogin();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
    
  }

  // ngOnDestroy() {
  //   this.userSub.unsubscribe();
  // }
}
