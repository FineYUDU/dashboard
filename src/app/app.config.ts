import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { enviroment } from '../enviroments/enviroment';
import { HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = {
  url: enviroment.base_url, options: {}
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(), 
    ),
    importProvidersFrom(
      HttpClientModule,
      SocketIoModule.forRoot(config)
    ),
  ]
};
