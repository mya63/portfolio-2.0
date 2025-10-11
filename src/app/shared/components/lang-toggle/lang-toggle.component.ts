import { Component } from '@angular/core';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.css']
})
export class LangToggleComponent {
  constructor(public i18n: I18nService) {}
  set(lang: 'de' | 'en') { this.i18n.setLang(lang); }
}
