import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Message {
  role: 'user' | 'bot';
  content: string;
}
@Injectable({
  providedIn: 'root',
})
export class BotMessagesService {
  private messagesSubject: BehaviorSubject<Message | null> =
    new BehaviorSubject<Message | null>(null);

  public getMessage(): Observable<Message | null> {
    return this.messagesSubject.asObservable();
  }

  public appendMessage(message: Message) {
    this.messagesSubject.next(message);
  }
}
