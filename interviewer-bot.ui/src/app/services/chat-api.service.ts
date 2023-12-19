import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {

  private apiUrl = 'https://microlinebotintervieweeservice.azurewebsites.net/api/';

  constructor(private http: HttpClient) {
  }

  public getQuestion():Observable<string>{
    //return this.http.get(`${this.apiUrl}/questions`);
    return of('First Question ' + "Test Question");
  }

  public sendMessage(userMessage: string): Observable<any> {
    const reqBody = {
      userId:1,
      chatId:1,
      question:"test question?",
      text:"I am good in C#, .NET and Angular",
      role: 0
    }
    
    // const res = this.http.post('http://localhost:7211/api/SubmitUserResponse', reqBody);
    const res = this.http.post('https://microlinebotintervieweeservice.azurewebsites.net/api/SubmitUserResponse', reqBody);
    console.log(res)
    return res;
   
   
    //return of('bot response for ' + userMessage);
  }
}
