// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    birth: new Date(),
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * On successful registration (data sent to the registration service),
   * the user will be presented with a snackbar message and the registration modal will close.
   * The user can then login with their new credentials.
   */
  registerUser(): void {
    this.fetchApiData.userRegistrationService(this.userData).subscribe(
      (response) => {
        this.dialogRef.close(); // This will close the modal on success!
        this.snackBar.open('User Registered Successfully!', 'OK', {
          duration: 2000,
        });
      },
      (response) => {
        this.snackBar.open(response, 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
