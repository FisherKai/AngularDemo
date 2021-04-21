import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import FastClick from 'fastclick';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

FastClick.attach(document.body);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
