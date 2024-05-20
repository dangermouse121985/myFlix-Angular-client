import { Component, Inject } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-details',
  templateUrl: './genre-details.component.html',
  styleUrl: './genre-details.component.scss',
})
export class GenreDetailsComponent {
  genre: any = {};
  constructor(
    public fetchApiData: FetchApiDataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.genre = this.data.datakey;
  }
}
