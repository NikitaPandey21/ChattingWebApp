import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cookieValue:string;

  constructor(private dataStorage: DataStorageService,
    private authSer: AuthService,
    private cookieService:CookieService) { }

  ngOnInit(): void {
    this.cookieValue = this.cookieService.get('username');
    console.log("cookieValue....",this.cookieValue);
  }
  
  onlogout(){
    this.cookieService.deleteAll();
    this.authSer.logout();
  }
}
