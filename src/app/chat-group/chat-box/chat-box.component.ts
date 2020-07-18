import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Chat } from '../chat-group.model';
import { ChatGroupService } from '../chat-group.service'
import { ChatSendService } from '../chat-send.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  id: number;
  chat: Chat;
  msgVal:string="";
  constructor(private activatedRoute: ActivatedRoute, 
    private chatGroup: ChatGroupService, 
    private chatSendSer: ChatSendService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((param: Params) => {
      this.id = +param['id']
      this.chat = this.chatGroup.getChat(this.id);
    });

    // this.chatSendSer.messages.subscribe(msg => {
    //   console.log(msg);
    // })
  }

  chatSend(theirMsg: string){
    this.chatSendSer.sendMsg(theirMsg);
    // console.log(theirMsg);
    this.msgVal="";
  }
}
