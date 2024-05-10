import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataDY, Personaje } from '../common/data-dy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private login : boolean = false;
  constructor(private http: HttpClient) { }
  
  loadDY(): Observable <DataDY>{
    return this.http.get<DataDY>("https://api.disneyapi.dev/character")
  }
  cargarPers(id: string): Observable <Personaje>{
    return this.http.get<Personaje>("https://api.disneyapi.dev/character/" + id);
  }
  reloadPag(pag: string): Observable<DataDY>{
    return this.http.get<DataDY>(pag);
  }
}
