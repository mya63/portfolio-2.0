import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LangToggleComponent } from '../components/lang-toggle/lang-toggle.component';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LangToggleComponent, TranslatePipe],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  navigate(fragment: string): void {
    this.closeMenu();
    this.router.navigate(['/']).then(() => {
      setTimeout(() => this.scrollToSection(fragment), 100);
    });
  }

  private scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (!element) return;

    const header = document.querySelector('.header') as HTMLElement | null;
    const offset = header?.offsetHeight ?? 96;
    const top = element.getBoundingClientRect().top + window.scrollY - offset + 96;

    window.scrollTo({ top, behavior: 'smooth' });
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 860 && this.menuOpen) this.menuOpen = false;
  }
}