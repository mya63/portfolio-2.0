import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent {
  items = [
    { text: 'Yunus really kept the team together…', by: 'V. Schuster – Team Partner', photo: 'assets/ref1.jpg' },
    { text: 'Great collaborator and communicator…', by: 'A. Nguyen – PM', photo: 'assets/ref1.jpg' },
    { text: 'Delivers clean code and on time…', by: 'S. Lee – CTO', photo: 'assets/ref1.jpg' },
  ];
  i = 0;
  next(){ this.i = (this.i + 1) % this.items.length; }
  prev(){ this.i = (this.i - 1 + this.items.length) % this.items.length; }
}
