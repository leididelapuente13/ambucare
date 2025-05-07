import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { definePreset } from '@primeng/themes';
import { provideMarkdown } from 'ngx-markdown';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            primary: {
              50: '{blue.50}',
              100: '{blue.100}',
              200: '{blue.200}',
              300: '{blue.300}',
              400: '{blue.400}',
              500: '{blue.500}',
              600: '{blue.600}',
              700: '{blue.700}',
              800: '{blue.800}',
              900: '{blue.900}',
              950: '{blue.950}'
            },
            secondary: {
              50: '{teal.50}',
              100: '{teal.100}',
              200: '{teal.200}',
              300: '{teal.300}',
              400: '{teal.400}',
              500: '{teal.500}',
              600: '{teal.600}',
              700: '{teal.700}',
              800: '{teal.800}',
              900: '{teal.900}',
              950: '{teal.950}'
            }
          }
        }),
        options: {
          darkModeSelector: false
        }
      }
    }),
    provideMarkdown()
  ]
}
