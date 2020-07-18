import { TestBed } from '@angular/core/testing';

import { ChatSendService } from './chat-send.service';

describe('ChatSendService', () => {
  let service: ChatSendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatSendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
