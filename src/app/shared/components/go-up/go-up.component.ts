import { Component, HostListener, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-go-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-up.component.html',
  styleUrls: ['./go-up.component.scss']
})
export class GoUpComponent implements OnInit {
  visible = signal(false);

  ngOnInit(): void {
    this.onScroll(); // initialer Zustand
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    this.visible.set(y > 200); // früher anzeigen
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
