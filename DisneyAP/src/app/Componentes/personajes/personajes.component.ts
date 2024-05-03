import { Component, inject } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { DataDY } from '../../common/data-dy';
import { PersonajesService } from '../../servicios/personajes.service';
import { Personaje } from '../../common/personaje';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  personajes!: DataDY
  private data: DataService = inject (DataService)
  constructor(){
    this.cargarDY();
  }

  private cargarDY(){
    this.data.loadDY().subscribe({
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
        this.loadPag("");
        break;
      case "prev":
        this.loadPag(this.personajes.info.previousPage);
        break;
      case "next":
        this.loadPag(this.personajes.info.nextPage);
        break;
      case "last":
        this.loadPag("" + this.personajes.info.totalPages);
        break;
      default:
        console.log("Error switch")
        break;

    }
  }

  private loadPag(pag: string){
    this.data.reloadPag(pag).subscribe({
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
