import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// ggf. Footer einbinden (siehe Punkt 2)
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-privacy',
  standalone: true,
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.scss'],
  imports: [FooterComponent] // <— wichtig, damit <app-footer> erkannt wird
})
export class PrivacyComponent {
  private doc = inject(DOCUMENT);

  backToTop() {
    // SSR-sicherer als direkt window zu benutzen
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
