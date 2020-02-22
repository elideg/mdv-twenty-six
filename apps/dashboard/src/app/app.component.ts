import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty-six/core-data';

@Component({
  selector: 'mdv-twenty-six-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    { path: '/drinks', icon: 'work', title: 'Drinks' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
