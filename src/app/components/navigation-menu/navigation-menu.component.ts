import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.css'
})
export class NavigationMenuComponent {
  constructor(public router: Router) { }

  goToLogIn() {
    this.router.navigate(['/login']);
  }
  goToSignUp() {
    this.router.navigate(['/signup']);
  }

}
