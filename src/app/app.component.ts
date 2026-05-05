import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import AOS from 'aos';
import { HeaderComponent } from './shared/header/header';
import { FooterComponent } from './shared/footer/footer';
import { GoUpComponent } from './shared/components/go-up/go-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, GoUpComponent],
  template: `
    <div class="app-layout">
      <app-go-up></app-go-up>
      <app-header></app-header>

      <main class="page">
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 160,
      easing: 'ease-in-out'
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          AOS.refreshHard();
        }, 200);
      });
  }
}