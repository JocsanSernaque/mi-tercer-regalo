export interface Product {
  id: number ;
  name: string;
  price: number;
  previousPrice?: number;
  picture: string;
  description?: string;
}

export interface ItemCarrito {
  product: Product;
  quantity: number;
}