import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../servicios/personajes.service';
import { Personaje } from '../../common/data-dy';
import { DataService } from '../../servicios/data.service';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  personaje!: Personaje
  private data: DataService = inject (DataService);
  private ActivatedRoute: ActivatedRoute = inject (ActivatedRoute);
  private Router: Router = inject (Router);

  constructor( ){
    this.cargarDY();

  }

  private cargarDY(){
    const id = this.ActivatedRoute.snapshot.params["id"]
    this.data.cargarPers(id).subscribe({
      next: (datos: Personaje) => {
        this.personaje = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }
  public cambiarChar(id: number){
    if(id>0 && id<7443){
      this.Router.navigateByUrl("/personajes/" + id).then(() => this.cargarDY())
    }
    
  }
}
