import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
  imports: [CommonModule]  
})

export class TestimonialsComponent {
  items = [
    { text: 'Yunus really kept the team together…', by: 'V. Schuster – Team Partner', photo: 'assets/ref1.png' },
    { text: 'Great collaborator and communicator…', by: 'A. Nguyen – PM', photo: 'assets/ref1.png' },
    { text: 'Delivers clean code and on time…', by: 'S. Lee – CTO', photo: 'assets/ref1.png' },
  ];
  i = 0;
  next(){ this.i = (this.i + 1) % this.items.length; }
  prev(){ this.i = (this.i - 1 + this.items.length) % this.items.length; }
}
