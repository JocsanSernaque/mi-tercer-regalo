import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { AboutComponent } from "../about/about.component";
import { ProductsComponent } from "../products/products.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent, AboutComponent, ProductsComponent, ServicesComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
