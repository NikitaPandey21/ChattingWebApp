import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../../chat-group.model';
import { ChatGroupService } from '../../chat-group.service'
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  @Input() index: number;
  @Input() chat: Chat;
  chatList:Chat[];

  constructor(private dataStorage:DataStorageService,private chatGroupService: ChatGroupService) {}

  ngOnInit(): void {
    // this.dataStorage.fetchUser().subscribe(
    //   chats => {
        // this.chatList = this.chatGroupService.getChatGroup();
        // // for(var chat in this.chatList) {
        // console.log("chatlist...",this.chatList)
        // }
    //   }
    // )
  }

}
