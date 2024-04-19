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
  birthDate = new Date(this.jsonData.birth);
  formattedBirthDate = formatDate(this.birthDate, 'YYYY-MM-dd', 'en-us');
  @Input() userData = {
    username: this.jsonData.username,
    password: '',
    first_name: this.jsonData.first_name,
    last_name: this.jsonData.last_name,
    email: this.jsonData.email,
    birth: this.birthDate,
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar
  ) {}

  setUser(): void {
    this.userData.birth = new Date(this.formattedBirthDate);
    console.log(this.userData.birth);
    console.log(this.userData);
    this.fetchApiData
      .updateUserService(this.userData.username, this.userData)
      .subscribe(
        (response) => {
          console.log(this.userData);
          localStorage.setItem('user', JSON.stringify(response));
          console.log(response);
        },
        (response) => {
          console.log(response);
          this.snackBar.open(response, 'OK', {
            duration: 2000,
          });
        }
      );
  }
}
