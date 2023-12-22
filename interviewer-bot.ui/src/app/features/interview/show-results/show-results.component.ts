import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InterviewResult } from 'src/app/models/submitAnswerResponse';

@Component({
  selector: 'app-show-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit {
  public result: string = '';
  constructor(private http: HttpClient) {
  }
  public ngOnInit(): void {
    const reqBody = {
      userId: 1,
      chatId: Number(sessionStorage.getItem('chatId'))
    }

    this.http.post<InterviewResult>('https://microlinebotintervieweeservice.azurewebsites.net/api/EndInterview', reqBody).subscribe(
      (r) => {
        this.result = r.message;
        sessionStorage.clear();
      });
  }
}
