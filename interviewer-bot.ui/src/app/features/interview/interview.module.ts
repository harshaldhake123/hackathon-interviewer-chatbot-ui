import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { ChatMessageComponent } from 'src/app/features/interview/chat-message/chat-message.component';
import { UserChatInputComponent } from 'src/app/features/interview/user-chat-input/user-chat-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MainSidenavComponent } from 'src/app/shared/components/main-sidenav/main-sidenav.component';

@NgModule({
  declarations: [InterviewComponent],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ChatMessageComponent,
    UserChatInputComponent,
    MatDialogModule,
    MainSidenavComponent
  ],
  providers:[]
})
export class InterviewModule {}
