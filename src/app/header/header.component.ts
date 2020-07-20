import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService,private authSer: AuthService) { }

  ngOnInit(): void {
  }
  onSaveData(){
		this.dataStorage.storeuser();
  }
  
  onlogout(){
    console.log("logout");
    this.authSer.logout();
  }
}
