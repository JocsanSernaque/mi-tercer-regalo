import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../service/cart';
import { Product } from '../../../models/products.model';

@Component({
    selector: 'app-products',
    imports: [],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(
    private router: Router,
    // private activatedRoute: ActivatedRoute
  ) {
  }

  readonly carrito = inject(CartService);

  productos: Product[] = [
    {
      id: 1,
      name: 'Detalle Sorpresa',
      description: 'Ideal para cumpleaños del engreído de casa',
      price: 79.90,
      previousPrice: 94.90,
      picture: 'assets/images/products/munecos/rana-rene.webp'
    },
    {
      id: 2,
      name: 'Cuadro Personalizado',
      description: 'Cuadro personalizado de 21cm x 29cm',
      price: 59.90,
      previousPrice: 69.90,
      picture: 'assets/images/products/cuadros/cuadro-para-papa.webp'
    },
    {
      id: 3,
      name: 'Tejido de Sporting Cristal',
      description: 'Tejido eterno para hincha de Sporting Cristal',
      price: 69.90,
      previousPrice: 79.90,
      picture: 'assets/images/products/tejidos/tejido-sportingC.webp'
    },
    {
      id: 4,
      name: 'Detalle de Universitario', 
      description: 'Globo detalle para hincha de universitario',
      price: 109.90, 
      previousPrice: 129.90,
      picture: 'assets/images/products/globos/globo-la-u.webp'
    },
    {
      id: 5,
      name: 'Desayuno Sorpresa', 
      description: 'Sorpréndela con un delicioso de desayuno de amor y flores',
      price: 99.90, 
      previousPrice: 109.90,
      picture: 'assets/images/products/flores/detalle-desayuno-de-amor.webp'
    },
    {
      id: 6,
      name: 'Ramo Eterno Stitch', 
      description: 'Ideal para aniversario de parejas',
      price: 105.90, 
      previousPrice: 125.90,
      picture: 'assets/images/products/flores/detalle-stitch.webp'
    },
    {
      id: 7,
      name: 'Ramo Hotweels', 
      description: 'Un regalo diferente para él',
      price: 89.90, 
      previousPrice: 109.90,
      picture: 'assets/images/products/flores/ramo-hotweels.webp'
    },
    {
      id: 8,
      name: 'Ramo Lotso', 
      description: 'Para tu dormilona favorita',
      price: 69.90, 
      previousPrice: 85.90,
      picture: 'assets/images/products/flores/ramo-lotso.webp'
    },
    {
      id: 9,
      name: 'Flores Eternas Amarillas', 
      description: 'Para una amistad que ilumina incluso los días nublados',
      price: 79.90, 
      previousPrice: 99.90,
      picture: 'assets/images/products/flores/flores-amarillas.webp'
    },
  ];

  addToCart(producto: Product): void {
    this.carrito.agregar(producto);
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

}
