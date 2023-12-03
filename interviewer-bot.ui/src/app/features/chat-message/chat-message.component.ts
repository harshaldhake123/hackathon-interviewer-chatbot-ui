import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from 'src/app/services/bot-messages.service';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {
  @Input() public message!: Message;
}
