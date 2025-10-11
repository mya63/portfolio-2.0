import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { de } from './translations/de';
import { en } from './translations/en';

type Lang = 'de' | 'en';
type Dict = Record<string, any>;
const DICTS: Record<Lang, Dict> = { de, en };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private lang$ = new BehaviorSubject<Lang>(this.readLang());
  currentLang$ = this.lang$.asObservable();

  t(path: string): string {
    const dict = DICTS[this.lang$.value];
    const value = path.split('.').reduce<any>((o, k) => (o && o[k] != null ? o[k] : null), dict);
    return typeof value === 'string' ? value : path;
  }

  setLang(lang: Lang) {
    if (lang === this.lang$.value) return;
    this.lang$.next(lang);
    localStorage.setItem('lang', lang);
  }

  getLang(): Lang {
    return this.lang$.value;
  }

  private readLang(): Lang {
    const v = localStorage.getItem('lang');
    return v === 'de' || v === 'en' ? v : 'en';
  }
}
