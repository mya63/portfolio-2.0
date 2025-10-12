import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',          // <a fragment="..."> scrollt zur ID
        scrollPositionRestoration: 'enabled' // Zurück-Navigation stellt Scroll-Position wieder her
      })
    ),
  ],
};
