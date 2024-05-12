import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../servicios/data.service';
import { PersonajeDy } from '../../common/personaje-dy';
import { format } from 'date-fns';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  
  private dato: DataService = inject (DataService);
  personaje: PersonajeDy = {info:  {count: 0,
    totalPages: 0,
    previousPage: null,
    nextPage: ""},
    data: { _id: 0,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
      parkAttractions: [],
      allies: [],
      enemies: [],
      sourceUrl: "",
      name: "",
      imageUrl: "",
      createdAt: "",
      updatedAt: "",
      url: "",
      __v: 0}
    };
  private ActivatedRoute: ActivatedRoute = inject (ActivatedRoute);
  private Router: Router = inject (Router);
  

  constructor(){
    this.cargarPer();
    
  }

  private cargarPer(){
    const id = this.ActivatedRoute.snapshot.params["id"];
    this.dato.cargarPers(id).subscribe({
      next: (datos: PersonajeDy) => {
        this.personaje = datos;
        this.personaje.data.createdAt = format(new Date(this.personaje.data.createdAt), 'dd/MM/yyyy');
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
    if(id>0 && id<7526){
      this.Router.navigateByUrl("/personajes/" + id).then(() => this.cargarPer())
    }
    
  }
}
