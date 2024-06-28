import { Component } from '@angular/core';
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
