import { Component } from '@angular/core';
import { ProductsComponent } from "../pages/products/products.component";
import { ServicesComponent } from "../pages/services/services.component";
import { AboutComponent } from "../pages/about/about.component";
import { RouterOutlet } from "../../../../node_modules/@angular/router/index";
import { TestimonialsComponent } from "../pages/testimonials/testimonials.component";

@Component({
    selector: 'app-home',
    imports: [ProductsComponent, ServicesComponent, AboutComponent, TestimonialsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
