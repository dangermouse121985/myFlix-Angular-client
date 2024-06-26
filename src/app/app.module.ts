import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldModule,
  matFormFieldAnimations,
} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFavoritesComponent } from './user-favorites/user-favorites.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { GenreDetailsComponent } from './genre-details/genre-details.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'favorites', component: UserFavoritesComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    MovieDetailsComponent,
    UserProfileComponent,
    UserFavoritesComponent,
    DirectorDetailsComponent,
    GenreDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButton,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function getLocalStorage() {
  return typeof window !== 'undefined' ? window.localStorage : null;
}
