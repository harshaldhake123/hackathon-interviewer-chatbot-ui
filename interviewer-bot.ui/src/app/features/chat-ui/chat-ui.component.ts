import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChatInputComponent } from '../user-chat-input/user-chat-input.component';
import { ChatMessageComponent } from 'src/app/features/chat-message/chat-message.component';
import {
  BotMessagesService,
  Message,
} from 'src/app/services/bot-messages.service';

@UntilDestroy()
@Component({
  selector: 'app-chat-ui',
  standalone: true,
  imports: [CommonModule, UserChatInputComponent, ChatMessageComponent],
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss'],
})
export class ChatUiComponent implements OnInit {
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
