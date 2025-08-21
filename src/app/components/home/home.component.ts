import { Component } from '@angular/core';
import { ProductsComponent } from "../pages/products/products.component";
import { ServicesComponent } from "../pages/services/services.component";
import { AboutComponent } from "../pages/about/about.component";
import { RouterOutlet } from "../../../../node_modules/@angular/router/index";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, ServicesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
