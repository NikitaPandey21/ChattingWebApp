import { Injectable } from '@angular/core';
import { WebSocketsService } from '../web-sockets.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators/';


@Injectable({
  providedIn: 'root'
})
export class ChatSendService {
  messages: Subject<any>;

  // Our constructor calls our wsService connect method

  constructor(private wsService: WebSocketsService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .pipe(
      map((response: any): any => {
        return response;
      }))
   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

}
