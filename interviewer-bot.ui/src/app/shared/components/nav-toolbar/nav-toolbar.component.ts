import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent {
  signIn = "Sign In";
  showEndInterview = false;

  @Input() username = '';
  @Input() signedIn = false;

  @Output() openSignIn = new EventEmitter<void>();
  @Output() startInterview = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  openSignInDialog() {
    this.openSignIn.emit();
  }

  startInterviewclick() {
    this.startInterview.emit(true);
    this.showEndInterview = true;
  }

  endInterview(){
    this.router.navigate(['/results']);
    this.showEndInterview = false;
    this.username = '';
    this.signedIn = false;
  }
}
