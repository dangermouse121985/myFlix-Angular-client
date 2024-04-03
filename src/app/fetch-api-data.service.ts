import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// Declaring the api url that will provide data for the client app
const apiUrl = 'https://dcrichlow-mymoviesflix-bb84bd41ee5a.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  // Inject the HttpClient Module to the contructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {}
  //making the api call for the user registration endpoint
  public userRegistrationService(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  public userLoginService(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  getAllMoviesService(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getOneMovieService(movieTitle: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(movieTitle);
    return this.http
      .get(apiUrl + 'movies/' + movieTitle, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getDirectorService(directorName: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(directorName);
    return this.http
      .get(apiUrl + 'directors/' + directorName, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getGenreService(genreTitle: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(genreTitle);
    return this.http
      .get(apiUrl + 'genres/' + genreTitle, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getUserService(username: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(username);
    return this.http
      .get(apiUrl + 'users/' + username, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getFavoritesService(username: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(username);
    return this.http
      .get(apiUrl + 'users/' + username + '/favorites', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  addFavoritesService(movieId: any, username: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(`${username} - ${movieId}`);
    return this.http
      .put(apiUrl + 'users/' + username + '/favorites/' + movieId, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  updateUserService(username: any, userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(username);
    return this.http
      .put(apiUrl + 'users/' + username, userDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  deleteMovieService(movieId: any, username: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(`${username} - ${movieId}`);
    return this.http
      .delete(apiUrl + 'users/' + username + '/favorites/' + movieId, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  deleteUserService(username: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(username);
    return this.http
      .delete(apiUrl + 'users/' + username, {
        headers: new HttpHeaders({
          Auathorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  // Non-typed response extraction
  private extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error Occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happenened; please try again later.');
  }
}
