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
const apiUrl = 'https://dcrichlow-mymoviesflix-bb84bd41ee5a.herokuapp.com';
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

  public UserLoginService(userDetails: any): Observable<any> {
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

  GetOneMovieService(movieTitle: any): Observable<any> {
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

  GetDirectorService(directorName: any): Observable<any> {
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

  GetGenreService(genreTitle: any): Observable<any> {
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

  GetUserService(username: any): Observable<any> {
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

  GetFavoritesService(username: any): Observable<any> {
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

  AddFavoritesService(movieId: any, username: any): Observable<any> {
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

  UpdateUserService(username: any): Observable<any> {
    const token = localStorage.getItem('token');
    console.log(username);
    return this.http
      .put(apiUrl + 'users/' + username, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  DeleteMovieService(movieId: any, username: any): Observable<any> {
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

  // Non-typed response extraction
  private extractResponseData(res: Response): any {
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
