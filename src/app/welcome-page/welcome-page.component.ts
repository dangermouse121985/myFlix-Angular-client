import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {
  showHeader: boolean = false;
  constructor(public dialog: MatDialog) {}
  ngONinit(): void {}

  /**
   * Open the UserRegistrationFormComponent to allow the user to create a new account.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {});
  }

  /**
   * Open the UserLoginFormComponent to allow the user to login
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {});
  }
}
