import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  public sendMessage(userMessage: string): Observable<string> {
    return of('bot response for ' + userMessage);
  }
}
