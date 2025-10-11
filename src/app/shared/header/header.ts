import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
selector: 'app-header',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './header.html',
styleUrls: ['./header.scss']
})
export class HeaderComponent {
menuOpen = false;


constructor(private router: Router) {}


toggleMenu() { this.menuOpen = !this.menuOpen; }
closeMenu() { this.menuOpen = false; }


navigate(fragment: string) {
this.closeMenu();
this.router.navigate(['/'], { fragment });
}


@HostListener('window:resize') onResize(){
// Safety: wenn vom mobilen Overlay auf Desktop gewechselt wird
if (window.innerWidth > 860 && this.menuOpen) this.menuOpen = false;
}
}