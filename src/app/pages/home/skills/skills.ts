import { Component } from '@angular/core';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],           // skills.html nutzt | t
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent {}
