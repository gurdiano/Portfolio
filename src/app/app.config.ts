import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};

export const Config = {
  repName: 'Lorem Ipsum',
  copyright: 'Copyright (c) 2025 Lorem Ipsum',
  likedin: 'loremipsum',
  email: 'loremipsumcontact@hotmail.com',
};
