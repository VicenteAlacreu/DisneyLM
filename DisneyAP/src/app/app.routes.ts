import { Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';


    export const routes: Routes = [
        { path: '', component: InicioComponent }, // Ruta para la página de inicio
        { path: 'personajes', component: PersonajesComponent }, // Ruta para la página de personajes
        // Otras rutas aquí...
      ];
    
