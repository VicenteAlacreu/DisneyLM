import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../servicios/personajes.service';
import { Personaje } from '../../common/personaje';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  miPersonaje: Personaje = {
    _id: 0,
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
    __v: 0
  }

  constructor(private personajeService: PersonajesService,
    private activatedRoute: ActivatedRoute){
    this.loadData();
  }
  private loadData() {
    const parametros = this.activatedRoute.snapshot.params;
    this.personajeService.getPersonaje(parametros['parametro']).subscribe(
    (data: any) => {
    this.miPersonaje = data;
    }
    )
    }
}
