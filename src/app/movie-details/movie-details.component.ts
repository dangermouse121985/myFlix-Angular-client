import { Component, Input, OnInit, Inject } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie: any = {};
  constructor(
    public fetchApiData: FetchApiDataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    //console.log(this.data.datakey);
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.fetchApiData
      .getOneMovieService(this.data.datakey)
      .subscribe((resp: any) => {
        this.movie = {
          title: resp.title,
          description: resp.description,
          imagePath: resp.imagePath,
          director: resp.director.name,
          actors: resp.actors,
          genre: resp.genre.name,
        };
        console.log(this.movie);
        return this.movie;
      });
  }
}
