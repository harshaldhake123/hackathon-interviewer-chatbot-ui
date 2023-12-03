import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { UserChatInputComponent } from '../user-chat-input/user-chat-input.component';
import {
  BotMessagesService,
  Message,
} from 'src/app/services/bot-messages.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, UserChatInputComponent],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
})
export class ChatBotComponent implements OnInit {
  public chatMessages: Message[] = [];

  constructor(
    private botMessageService: BotMessagesService,
  ) {}

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
