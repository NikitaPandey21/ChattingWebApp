import { Component, OnInit } from '@angular/core';
import { ChatSendService } from '../../chat-send.service'
// import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css']
})
export class ChatBarComponent implements OnInit {
    message:string[] = [];
   constructor(private chatSendSer: ChatSendService) { }

   ngOnInit(): void {
  //   this.af.list("/Path").push
  this.chatSendSer.messages.subscribe(msg => {
    this.message.push(msg.text)
    console.log(this.message);
  })
  }

}
