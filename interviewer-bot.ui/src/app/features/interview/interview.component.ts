import { Component, OnInit } from '@angular/core';
import { untilDestroyed } from '@ngneat/until-destroy';
import {
  Message,
  BotMessagesService,
} from 'src/app/services/bot-messages.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {
  public chatMessages: Message[] = [];

  constructor(private botMessageService: BotMessagesService) {}

  public ngOnInit(): void {
    this.botMessageService
      .getMessage()
      .pipe(untilDestroyed(this))
      .subscribe((message) => {
        if (message !== null) {
          this.chatMessages.push(message);
        }
      });
  }
}
