import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.scss']
})
export class PrivacyComponent {
  backToTop(){ window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
