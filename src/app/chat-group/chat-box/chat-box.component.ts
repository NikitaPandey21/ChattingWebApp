import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Chat } from '../chat-group.model';
import { ChatGroupService } from '../chat-group.service'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  id: number;
  chat: Chat;
  msgVal:string="";
  constructor(public activatedRoute: ActivatedRoute, public chatGroup: ChatGroupService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((param: Params) => {
      this.id = +param['id']
      this.chat = this.chatGroup.getChat(this.id);
    });
  }

  chatSend(theirMsg: string){
    console.log(theirMsg);
    this.msgVal="";
  }
}
