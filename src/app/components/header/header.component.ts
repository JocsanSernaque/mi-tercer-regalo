import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {  
  items = [
  {
    text: '¡Bienvenida Primavera!',
    link: 'https://wa.me/51955254056?text=Hola%2C%20quiero%20conocer%20las%20promociones%20de%20primavera'
  },
  {
    text: '¡Descuentos Especiales!',
    link: 'https://wa.me/51955254056?text=Hola%2C%20quiero%20conocer%20los%20descuentos%20especiales'
  },
  {
    text: 'Envíos a Todo el Perú',
    link: 'https://wa.me/51955254056?text=Hola%2C%20quisiera%20información%20sobre%20los%20envíos'
  }
];
}
