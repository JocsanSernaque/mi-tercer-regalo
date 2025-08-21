import { Routes } from '@angular/router';
import { ProductsComponent } from './components/pages/products/products.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { QuestionsComponent } from './components/pages/questions/questions.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
  // { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
     { path: 'inicio', component: HomeComponent },
     { path: 'productos', component: ProductsComponent },
     { path: 'servicios', component: ServicesComponent },
     { path: 'nosotros', component: AboutComponent },
     { path: 'testimonios', component: TestimonialsComponent },
     { path: 'preguntas-frecuentes', component: QuestionsComponent },  
     { path: '**', component: NotfoundComponent }
];
