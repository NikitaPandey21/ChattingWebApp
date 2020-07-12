// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { Chat } from './chat-group.model';
// import { DataStorageService } from '../shared/data-storage.service';
// import { ChatGroupService } from './chat-group.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class ChatResolverService implements Resolve<Chat[]> {
//     constructor(private dataStorageService:DataStorageService,private chatGroupService:ChatGroupService){}

//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//         const chat = this.chatGroupService.getChatGroup();

//         if (chat.length == 0){
//             return this.dataStorageService.fetchUser();
//         }
//         else {
//             return chat;
//         }
//     }
// }