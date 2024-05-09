import { Component, inject } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { DataDY , Personaje } from '../../common/data-dy';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  personajes: DataDY = {info: {
    count: 7526,
    totalPages: 5,
    previousPage: null,
    nextPage: 'https://example.com/api?page=2'
  },
  data: []};
  private date: DataService = inject (DataService)
  constructor(){
    this.cargarDY();
  }

  private cargarDY(){
    this.date.loadDY().subscribe({
      next: (datos: DataDY) => {
        this.personajes = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }
  cambiarPag(pag: string){
    switch(pag){
      case "first":
        this.loadPag("https://api.disneyapi.dev/character/?page=1");
        break;
      case "prev":
        this.loadPag(this.personajes.info.previousPage);
        break;
      case "next":
        this.loadPag(this.personajes.info.nextPage);
        break;
      case "last":
        this.loadPag("https://api.disneyapi.dev/character/?page=" + this.personajes.info.totalPages);
        break;
      default:
        console.log("Error switch")
        break;

    }
  }

  private loadPag(pag: string){
    this.date.reloadPag(pag).subscribe({
      next: (datos: DataDY) => {
        this.personajes = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }
}
