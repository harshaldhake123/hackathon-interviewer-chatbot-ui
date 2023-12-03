import { Component } from '@angular/core';
import { ChatApiService } from 'src/app/services/chat-api.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  BotMessagesService,
  Message,
} from 'src/app/services/bot-messages.service';
@Component({
  selector: 'app-user-chat-input',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './user-chat-input.component.html',
  styleUrls: ['./user-chat-input.component.scss'],
})
export class UserChatInputComponent {
  public chatForm: FormGroup;

  constructor(
    private chatApiService: ChatApiService,
    private formBuilder: FormBuilder,
    private chatMessageService: BotMessagesService
  ) {
    this.chatForm = this.formBuilder.group({
      textMessage: [null, Validators.required],
    });
    this.chatForm.pristine;
  }

  public sendMessage(): void {
    const messageContent = this.chatForm.controls['textMessage'].value;
    this.chatMessageService.appendMessage(<Message>{
      role: 'user',
      content: messageContent,
    });

    this.chatApiService.sendMessage(messageContent).subscribe((botMessage) => {
      const message: Message = { role: 'bot', content: botMessage };
      this.chatMessageService.appendMessage(message);
      this.chatForm.reset();
    });
  }
}
