import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

type Item = { key: string; photo: string };

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent {
  items: Item[] = [
    { key: 'card1', photo: 'assets/ref1.jpg' },
    { key: 'card2', photo: 'assets/ref2.jpg' },
    { key: 'card3', photo: 'assets/ref3.jpg' }
    
  ];
  index = 0;

  get tKey(){ return `refs.${this.items[this.index].key}`; }
  prev(){ this.index = (this.index - 1 + this.items.length) % this.items.length; }
  next(){ this.index = (this.index + 1) % this.items.length; }
  go(i: number){ this.index = i; }
}
