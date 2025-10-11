// src/app/pages/home/about-me/about-me.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule], // falls du irgendwo *ngIf/*ngFor nutzt, bist du safe
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss'],
})
export class AboutMeComponent {}
