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
  director: any = {};
  genre: any = {};
  actor: any = {};
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

  getDirector(): void {
    this.genre = {};
    this.actor = {};
    this.fetchApiData
      .getDirectorService(this.movie.director)
      .subscribe((response: any) => {
        console.log(response);
        this.director = response;
        return this.director;
      });
  }

  getActor(actorName: any): void {
    this.director = {};
    this.genre = {};
    this.fetchApiData.getActorsService(actorName).subscribe((response: any) => {
      console.log(response);
      this.actor = response[0];
      return this.actor;
    });
  }

  getGenre(): void {
    this.director = {};
    this.actor = {};
    this.fetchApiData
      .getGenreService(this.movie.genre)
      .subscribe((response: any) => {
        console.log(response);
        this.genre = response;
        return this.genre;
      });
  }
}
