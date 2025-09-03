import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'El servicio fue increíble, recibí mi regalo a tiempo y con un detalle hermoso.',
      name: 'María López',
      role: 'Cliente',
      avatar: 'https://i.pravatar.cc/100?img=1'
    },
    {
      text: 'Muy buena atención, todo personalizado y con mucho cariño.',
      name: 'Carlos Sánchez',
      role: 'Cliente',
      avatar: 'https://i.pravatar.cc/100?img=2'
    },
    {
      text: 'Definitivamente volveré a comprar, me encantó la experiencia.',
      name: 'Ana Torres',
      role: 'Cliente',
      avatar: 'https://i.pravatar.cc/100?img=3'
    },
    {
      text: 'El regalo superó mis expectativas, se nota la dedicación en cada detalle.',
      name: 'Luis Ramírez',
      role: 'Cliente',
      avatar: 'https://i.pravatar.cc/100?img=4'
    },
    {
      text: 'Excelente servicio, muy atentos desde el inicio hasta la entrega.',
      name: 'Valeria Castro',
      role: 'Cliente',
      avatar: 'https://i.pravatar.cc/100?img=5'
    },
    {
      text: 'Un detalle perfecto, mi pareja quedó fascinada con el regalo.',
      name: 'Jorge Fernández',
      role: 'Cliente',
      avatar: 'https://i.pravatar.cc/100?img=6'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

}
