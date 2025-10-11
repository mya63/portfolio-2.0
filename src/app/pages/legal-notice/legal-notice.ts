import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss'],
  imports: [RouterLink, FooterComponent],
})
export class LegalNoticeComponent {
  private doc = inject(DOCUMENT);
  backToTop() {
    this.doc.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
