// src/app/pages/home/home/home.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero';
import { AboutMeComponent } from '../about-me/about-me';   // ⬅️ hier
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { ContactComponent } from '../../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutMeComponent,        // ⬅️ hier
    SkillsComponent,
    ProjectsComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
