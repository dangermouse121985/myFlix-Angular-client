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

  /**
   * The header will not appear on the welcome (login) page. Once logged in the header will be visible
   * @param router
   */
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

  /**
   * Clear local storage on logout
   */
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
