import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';




@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.css']
})
export class ChatGroupComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { 
    // this.dataStorageService.fetchUser();
  }

  ngOnInit(): void {
    
  }

}
