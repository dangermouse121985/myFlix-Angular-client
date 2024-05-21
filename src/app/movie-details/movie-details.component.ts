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

  /**
   * Get movie details based on information sent from movie-card or user-favorites component
   */
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
        return this.movie;
      });
  }

  /**
   * Get the director for the movie the user is viewing
   */
  getDirector(): void {
    this.genre = {};
    this.actor = {};
    this.fetchApiData
      .getDirectorService(this.movie.director)
      .subscribe((response: any) => {
        this.director = response;
        return this.director;
      });
  }

  /**
   * Get the actor for the movie the user is viewing. This function is within a loop in the html that will get the list (3) of featured actors.
   * @param actorName
   */
  getActor(actorName: any): void {
    this.director = {};
    this.genre = {};
    this.fetchApiData.getActorsService(actorName).subscribe((response: any) => {
      this.actor = response[0];
      return this.actor;
    });
  }

  /**
   * Get teh genre for the movie the user is viewing.
   */
  getGenre(): void {
    this.director = {};
    this.actor = {};
    this.fetchApiData
      .getGenreService(this.movie.genre)
      .subscribe((response: any) => {
        this.genre = response;
        return this.genre;
      });
  }
}
