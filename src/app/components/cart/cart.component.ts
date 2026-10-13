import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../service/cart';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  readonly carrito = inject(CartService);
}
