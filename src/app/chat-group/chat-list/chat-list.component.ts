import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chat-group.model';
import { ChatGroupService } from '../chat-group.service'



@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chat: Chat[];
  email:string;
  username:string;
  constructor(public chatGroup: ChatGroupService) { 
    
  }

  ngOnInit(): void {
    this.email=this.chatGroup.email;
    this.chat = this.chatGroup.getChatGroup();
    for(var index in this.chat){
      if(this.chat[index].email==this.email){
        this.username=this.chat[index].name;
      }
    }
    
  }

}
