import { Component } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],            // Pipe wird im Template benutzt (| t)
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent {
  name  = 'Muhammed Yunus Amini';
  title = 'FULLSTACK DEVELOPER';
  email = 'muhammedyunusamini4@gmail.com';

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
