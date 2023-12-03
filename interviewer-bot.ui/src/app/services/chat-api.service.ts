import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  public sendMessage(userMessage: string): Observable<string> {
    console.log(userMessage);
    return of('bot response');
  }
}
