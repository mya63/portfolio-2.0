import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.scss']
})
export class LangToggleComponent {
  lang = inject(I18nService);
  set(code: 'de'|'en'){ this.lang.setLang(code); }
  is(code: 'de'|'en'){ return this.lang.getLang() === code; }
}
