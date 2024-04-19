import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myFlix-Angular-client';
  showHeader: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/welcome') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }

      if (val instanceof NavigationEnd) {
        if (val.url == '/') {
          this.showHeader = false;
        }
      }
    });
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
