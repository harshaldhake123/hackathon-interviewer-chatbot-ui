import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule],
})
export class SigninComponent {
  // @Output() onSignIn = new EventEmitter<string>();
  username = '';

  constructor(public dialogRef: MatDialogRef<SigninComponent>) {
  }
  signIn() {
    this.dialogRef.close(this.username);

    //this.onSignIn.emit(this.username);
  }
}