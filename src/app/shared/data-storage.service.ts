import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatGroupService } from '../chat-group/chat-group.service';
import { Chat } from '../chat-group/chat-group.model';
import { tap } from 'rxjs/operators';

@Injectable(
    {
        providedIn:'root'
    }
)

export class DataStorageService {
    constructor(private http: HttpClient,private chatGroupService:ChatGroupService){}

    storeuser(){
        const chatgrp = this.chatGroupService.getChatGroup();
        this.http.put('https://chatapp-51d4d.firebaseio.com/user.json',chatgrp)
        .subscribe(
            response => {
                console.log(response);
            }
        )
    }

    fetchUser(){
        return this.http.get<Chat[]>("https://chatapp-51d4d.firebaseio.com/user.json")
        // .subscribe(
        //     chats => {
        //         this.chatGroupService.getUser(chats);
        //     }
        // )
    }
}