import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from 'src/app/services/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent {
  // public toggleSidenav(): void {
  //   this.sidenav.toggle();
  // }
  signIn = "Sign In";
  showEndInterview = false;

  @Input() username = '';
  @Input() signedIn = false;

  @Output() openSignIn = new EventEmitter<void>();
  @Output() startInterview = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {}

  openSignInDialog() {
    this.openSignIn.emit();
  }

  startInterviewclick() {
    this.startInterview.emit(true);
    this.showEndInterview = true;
  }
}
