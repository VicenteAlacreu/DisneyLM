import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { HeaderComponent } from './Componentes/header/header.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch(),
    
  )
  ]
};
