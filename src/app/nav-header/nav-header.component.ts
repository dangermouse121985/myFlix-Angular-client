import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss',
})
export class NavHeaderComponent {
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
