import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import {
  CountdownComponent,
  CountdownConfig,
  CountdownModule,
} from 'ngx-countdown';
import { Router } from '@angular/router';
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
    CountdownModule,
  ],
  templateUrl: './user-chat-input.component.html',
  styleUrls: ['./user-chat-input.component.scss'],
})
export class UserChatInputComponent implements OnInit {
  @ViewChild('countdown') private countdown!: CountdownComponent;
  public chatForm: FormGroup;
  public countdownConfig: CountdownConfig = {
    leftTime: 120,
    notify: [60, 15],
    format: 'mm:ss',
  };

  constructor(
    private chatApiService: ChatApiService,
    private formBuilder: FormBuilder,
    private chatMessageService: BotMessagesService,
    private router: Router
  ) {
    this.chatForm = this.formBuilder.group({
      textMessage: [null, Validators.required],
    });
  }

  public ngOnInit(): void{
    this.chatApiService.getQuestion().subscribe(question => 
      {
        const message: Message = { role: 'bot', content: question.question };
        sessionStorage.clear();
        sessionStorage.setItem('questionId', question.questionId.toString());
        sessionStorage.setItem('chatId', question.chatId.toString());
        this.chatMessageService.appendMessage(message);
      })
  }

  public sendMessage(): void {
    const messageContent = this.chatForm.controls['textMessage'].value;
    this.chatForm.reset();
    this.chatMessageService.appendMessage(<Message>{
      role: 'user',
      content: messageContent,
    });

    const questionId =  sessionStorage.getItem('questionId');
    const chatId = sessionStorage.getItem('chatId');

    this.chatApiService.sendMessage(chatId, messageContent, questionId).subscribe((botMessage) => {
      if(botMessage.questionId === null)
      {
        this.router.navigate(['/results']);
      }
      const message: Message = { role: 'bot', content: botMessage.nextQuestion };
      sessionStorage.setItem('questionId', botMessage.questionId.toString());
      this.chatMessageService.appendMessage(message);
    });
  }
}
