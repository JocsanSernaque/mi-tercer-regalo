import { computed, Injectable, signal } from '@angular/core';
import { Product, ItemCarrito } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private readonly storageKey = 'mi-tercer-regalo-cart';

  private readonly _items = signal<ItemCarrito[]>(
    this.loadCart()
  );

  readonly items = this._items.asReadonly();

  readonly totalUnidades = computed(() =>
    this._items().reduce(
      (total, item) => total + item.quantity,
      0
    )
  );

  readonly subtotal = computed(() =>
    this._items().reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    )
  );

  agregar(producto: Product): void {
    this._items.update(items => {
      const existente = items.find(
        item => item.product.id === producto.id
      );

      if (existente) {
        return items.map(item =>
          item.product.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { product: producto, quantity: 1 }];
    });

    this.guardar();
  }

  aumentar(id: Product['id']): void {
    this._items.update(items =>
      items.map(item =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    this.guardar();
  }

  disminuir(id: Product['id']): void {
    this._items.update(items =>
      items
        .map(item =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );

    this.guardar();
  }

  eliminar(id: Product['id']): void {
    this._items.update(items =>
      items.filter(item => item.product.id !== id)
    );

    this.guardar();
  }

  vaciar(): void {
    this._items.set([]);
    this.guardar();
  }

  private loadCart(): ItemCarrito[] {
    try {
      if (typeof localStorage === 'undefined') {
        return [];
      }

      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) as ItemCarrito[] : [];
    } catch {
      return [];
    }
  }

  private guardar(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(
          this.storageKey,
          JSON.stringify(this._items())
        );
      }
    } catch {
      // El carrito sigue funcionando en memoria
      // si el almacenamiento no está disponible.
    }
  }
}
