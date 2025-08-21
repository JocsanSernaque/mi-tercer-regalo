import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
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

  gotoHome() {
    this.router.navigate(['/home']);
  }

}
