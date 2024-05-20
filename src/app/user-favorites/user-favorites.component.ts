import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DirectorDetailsComponent } from '../director-details/director-details.component';
import { GenreDetailsComponent } from '../genre-details/genre-details.component';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrl: './user-favorites.component.scss',
})
export class UserFavoritesComponent {
  movies: any[] = [];
  userFavorites: any[] = [];
  localData = localStorage.getItem('user');
  userData = JSON.parse(this.localData!);
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.getMovies();
    } else {
      this.router.navigate(['welcome']);
    }
  }

  /**
   * Get all movies from the GET movies endpoint.
   * Filter by the user's (localStorage('user')) favorite's list
   */
  getMovies(): void {
    this.fetchApiData.getAllMoviesService().subscribe((resp: any) => {
      this.movies = resp;
      this.userFavorites = this.movies.filter((m) => {
        console.log(m._id);
        return this.userData.favorites.includes(m._id);
      });
      console.log(this.userFavorites);
      return this.userFavorites;
    });
  }

  /**
   * Send the movieTitle to the MovieDetailsComponent as a datakey.
   * Open the MovieDetailsComponent dialog using the movieTitle
   * @param movieTitle
   */
  openMovieDetailsDialog = (movieTitle: string) => {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        datakey: movieTitle,
      },
    });
  };

  /**
   * Send the directorName to the DirectorDetailsComponent as a datakey.
   * Open the DirectorDetailsComponent dialog using the directorName
   * @param directorName
   */
  openDirectorDetailsDialog = (directorName: string) => {
    this.dialog.open(DirectorDetailsComponent, {
      data: {
        datakey: directorName,
      },
    });
  };

  /**
   * Send the genreName to the GenreDetailsComponent as a datakey.
   * Open the GenreDetailsComponent dialog using the genreTitle
   * @param genreTitle
   */
  openGenreDetailsDialog = (genreTitle: string) => {
    this.dialog.open(GenreDetailsComponent, {
      data: {
        datakey: genreTitle,
      },
    });
  };

  /**
   * If the movieID is already in the user's favorite list, remove it as a favorite.
   * Otherwise, add the id to the user's favorite list.
   * The user will also receive a message asking them to refresh the page to see the changes.
   * @param movieId
   */
  addMovieToFavorites = (movieId: string) => {
    if (this.userData.favorites.indexOf(movieId) !== -1) {
      this.fetchApiData
        .deleteFavoriteMovieService(this.userData.username, movieId)
        .subscribe((response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.userData = response;
          this.snackBar.open(
            'Please Refresh the Page to See the Changes',
            'OK',
            {
              duration: 5000,
            }
          );
        });
    } else {
      this.fetchApiData
        .addFavoritesService(this.userData.username, movieId)
        .subscribe((response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.userData = response;
          this.snackBar.open(
            'Please Refresh the Page to See the Changes',
            'OK',
            {
              duration: 5000,
            }
          );
        });
    }
  };
}
