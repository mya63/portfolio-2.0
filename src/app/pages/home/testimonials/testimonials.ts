import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type RefItem = {
  text: string;
  author: string;
  role: string;
  photo: string;
};

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class TestimonialsComponent {
  items: RefItem[] = [
    {
      text:
        "Yunus was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
      author: 'Tony Stark - CEO, Stark Industries',
      role: 'Mentor & Team Lead',
      photo: 'assets/ref1.jpg',
    },
    {
      text:
        "Muhammed Yunus really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: 'Steve Jobs - Former CEO, Apple Inc.',
      role: 'Project Manager',
      photo: 'assets/ref2.jpg',
    },
    {
      text:
        'It was a great pleasure to work with Yunus. He was always present, helpful and added something to brainstorming – with a great sense of humor.',
      author: 'Sundar Pichai - CEO, Google LLC',
      role: 'Colleague',
      photo: 'assets/ref3.jpg',
    },
  ];

  index = 0;
  get current(): RefItem { return this.items[this.index]; }

  next(): void { this.index = (this.index + 1) % this.items.length; }
  prev(): void { this.index = (this.index - 1 + this.items.length) % this.items.length; }
  go(i: number): void { this.index = i; }
}
