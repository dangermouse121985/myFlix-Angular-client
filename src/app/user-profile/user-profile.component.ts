import { Component, Inject, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  data = localStorage.getItem('user');
  jsonData = JSON.parse(this.data!);
  formattedBirthDate = this.jsonData.birth
    ? formatDate(new Date(this.jsonData.birth), 'YYYY-MM-dd', 'en-us')
    : '';
  @Input() userData = {
    username: this.jsonData.username,
    password: '',
    first_name: this.jsonData.first_name,
    last_name: this.jsonData.last_name,
    email: this.jsonData.email,
    birth: new Date(this.formattedBirthDate),
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar
  ) {}

  setUser(): void {
    console.log(this.userData);
    this.userData.birth = new Date(this.formattedBirthDate);
    this.fetchApiData
      .updateUserService(this.userData.username, this.userData)
      .subscribe(
        (response) => {
          localStorage.setItem('user', JSON.stringify(response));
        },
        (response) => {
          this.snackBar.open(response, 'OK', {
            duration: 2000,
          });
        }
      );
  }
}
