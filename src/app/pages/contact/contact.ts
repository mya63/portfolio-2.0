import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslatePipe],           // contact.html nutzt | t
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],      // plural + Array
})
export class ContactComponent {}
