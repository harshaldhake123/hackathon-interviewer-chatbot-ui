import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { ChatMessageComponent } from 'src/app/features/interview/chat-message/chat-message.component';
import { UserChatInputComponent } from 'src/app/features/interview/user-chat-input/user-chat-input.component';

@NgModule({
  declarations: [InterviewComponent],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ChatMessageComponent,
    UserChatInputComponent,
  ],
})
export class InterviewModule {}
