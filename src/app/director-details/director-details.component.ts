import { Component, Inject } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrl: './director-details.component.scss',
})
export class DirectorDetailsComponent {
  director: any = {};
  constructor(
    public fetchApiData: FetchApiDataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.director = this.data.datakey;
    console.log(this.director);
  }
}
