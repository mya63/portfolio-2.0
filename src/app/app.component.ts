import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header';
import { FooterComponent } from './shared/footer/footer';


@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, HeaderComponent, FooterComponent],
template: `
<app-header></app-header>
<main class="page">
<router-outlet></router-outlet>
</main>
<app-footer></app-footer>
`,
})
export class AppComponent {}