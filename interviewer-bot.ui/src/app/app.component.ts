import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from './features/interview/sign-in/sign-in.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interviewer-bot.ui';

  signedIn = false; 
  interviewStarted = false;
  username = '';
  
  constructor(private dialog: MatDialog) { } 
  
  
  openSignInDialog() {
    const dialogRef = this.dialog.open(SigninComponent, { width: '300px', });
     dialogRef.afterClosed().subscribe((result) => {
      // eslint-disable-next-line no-empty
      if (result) { 
        this.username = result;
        this.signedIn = true;
      }
    });
    
  }

  showInterviewChat(res: boolean) {
    this.interviewStarted = res;
  }
}
