import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    menuOpen = false;
    toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
