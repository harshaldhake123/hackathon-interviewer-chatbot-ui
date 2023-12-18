import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {

  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {
  }

  public getQuestion():Observable<string>{
    //return this.http.get(`${this.apiUrl}/questions`);
    return of('First Question ' + "Test Question");
  }

  public sendMessage(userMessage: string): Observable<string> {
   // return this.http.post(`${this.apiUrl}/submit-answer`, userMessage);
    return of('bot response for ' + userMessage);
  }
}
