import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home';


export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'impressum', loadComponent: () => import('./pages/impressum/impressum').then(m => m.ImpressumComponent) },
{ path: 'privacy', loadComponent: () => import('./pages/privacy/privacy').then(m => m.PrivacyComponent) },
{ path: 'legal-notice',loadComponent: () => import('./pages/legal-notice/legal-notice').then(m => m.LegalNoticeComponent) },
{ path: '**', redirectTo: '' },
];