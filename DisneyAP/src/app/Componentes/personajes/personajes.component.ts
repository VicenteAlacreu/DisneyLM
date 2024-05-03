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
  private data: DataService = inject (DataService);
  private personajesService: PersonajesService = inject(PersonajesService)
  datady!: DataDY;
  personajes: Personaje[] = [];
  constructor(){
    this.loadPersonajes();
  }
  private loadPersonajes() {
    this.personajesService.getPersonajes().subscribe(
    (data: any) => {
    this.personajes = data.results;
    }
    )
    }
}
