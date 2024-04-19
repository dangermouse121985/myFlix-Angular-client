import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrl: './user-favorites.component.scss',
})
export class UserFavoritesComponent {
  movies: any[] = [];
  userFavorites: any[] = [];
  data = localStorage.getItem('user');
  userData = JSON.parse(this.data!);
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

  openMovieDetailsDialog = (movieTitle: string) => {
    this.dialog.open(MovieDetailsComponent, {
      data: {
        datakey: movieTitle,
      },
    });
  };

  addMovieToFavorites = (movieId: string) => {
    if (this.userData.favorites.indexOf(movieId) !== -1) {
      console.log(this.userData.username);
      this.fetchApiData
        .deleteFavoriteMovieService(this.userData.username, movieId)
        .subscribe((response: any) => {
          console.log(response);
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
      console.log(this.userData.username);
      this.fetchApiData
        .addFavoritesService(this.userData.username, movieId)
        .subscribe((response: any) => {
          console.log(response);
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
