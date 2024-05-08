import { Routes } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';
import { PersonajeComponent } from './Componentes/personaje/personaje.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegisterComponent } from './Componentes/register/register.component';


    export const routes: Routes = [
        { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        { path: 'inicio', component: InicioComponent}, // Ruta para la página de inicio
        { path: 'personajes', component: PersonajesComponent },// Ruta para la página de personajes
        { path: 'personajes/:id', component: PersonajeComponent},// Ruta para la página de personaje con id
        { path: 'login', component:LoginComponent}, //Ruta para la pagina de login
        { path: 'register', component: RegisterComponent}, //Ruta para la pagina de registrarse
        
        
        { path: "**", component: ErrorComponent}
        // Otras rutas aquí...
      ];
    
