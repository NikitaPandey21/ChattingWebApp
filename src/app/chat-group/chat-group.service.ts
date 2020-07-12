import { Injectable } from '@angular/core'
import { Chat } from './chat-group.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ChatGroupService {
    addUser = new Subject<Chat[]>();
    chatobj: Chat;
    email:string;
    // private chat: Chat[] = [
    //     new Chat(
    //         'Nikita Pandey',
    //         'https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg'
    //     ),

    //     new Chat(
    //         'Nikki',
    //         'https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg'
    //     )
    // ];

    private chat: Chat[]=[];
    getChatGroup(){
        console.log("email..",this.email);
        return this.chat.slice();
    }

    getChat(id:number){
        return this.chat[id];
    }

    addnewUser(email:string,username:string){
        this.chatobj = new Chat(email,username,'https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg')
        this.chat.push(this.chatobj)
        this.addUser.next(this.chat.slice())
    }

    getUser(chats: Chat[]){
        this.chat = chats;
        this.addUser.next(this.chat)
    }
    
}