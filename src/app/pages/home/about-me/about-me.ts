import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss']
})
export class AboutMeComponent {}
