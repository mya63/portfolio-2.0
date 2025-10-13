import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss']
})
export class LegalNoticeComponent {
  backToTop(){ window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
