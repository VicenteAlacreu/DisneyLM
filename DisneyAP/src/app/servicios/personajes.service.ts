import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  URL = 'https://api.disneyapi.dev/character/';
  private http: HttpClient = inject (HttpClient);
  constructor() { }
  
  getPersonajes() {
  return this.http.get(this.URL);
  }
  getPersonaje(id: number){
    return this.http.get(this.URL+id);
    }
}
