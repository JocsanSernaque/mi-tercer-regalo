import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../../service/cart';

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

  readonly carrito = inject(CartService)
}