import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangToggleComponent } from '../components/lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LangToggleComponent], // <--
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  open = false;
  nav = [
    { label: 'About me', link: '/', fragment: 'about' },
    { label: 'Skills',    link: '/', fragment: 'skills' },
    { label: 'Portfolio', link: '/', fragment: 'portfolio' },
  ];
  toggle(){ this.open = !this.open; }
  close(){ this.open = false; }
}
