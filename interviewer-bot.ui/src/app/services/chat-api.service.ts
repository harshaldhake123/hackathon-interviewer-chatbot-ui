import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { getInterviewQuestionResponse } from '../models/getInterviewQuestionResponse';
import { submitAnswerResponse } from '../models/submitAnswerResponse';

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {

  private apiUrl = 'https://microlinebotintervieweeservice.azurewebsites.net/api/';

  constructor(private http: HttpClient) {
  }

  public getQuestion():Observable<getInterviewQuestionResponse>{
    const reqbody = {
        userName: "TestUser"
    }
    return this.http.post<getInterviewQuestionResponse>('https://microlinebotintervieweeservice.azurewebsites.net/api/StartInterview', reqbody);
  }

  public sendMessage(chatId: string | null, answer: string, questionId: string | null): Observable<submitAnswerResponse> {
    const reqBody = {
      userId:1,
      chatId:Number(chatId),
      questionId:Number(questionId),
      text:answer,
      role: 0
    }
    
    return this.http.post<submitAnswerResponse>('https://microlinebotintervieweeservice.azurewebsites.net/api/SubmitUserResponse', reqBody);
  }
}
