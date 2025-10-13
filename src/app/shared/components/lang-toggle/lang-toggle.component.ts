import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../../core/i18n/i18n.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lang-toggle">
      <button type="button"
              class="pill pill--outline"
              [class.active]="lang.getLang()==='de'"
              (click)="set('de')">DE</button>
      <button type="button"
              class="pill pill--solid"
              [class.active]="lang.getLang()==='en'"
              (click)="set('en')">EN</button>
    </div>
  `
})
export class LangToggleComponent {
  lang = inject(I18nService);
  set(code: 'de'|'en'){ this.lang.setLang(code); }
}
