import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataDY } from '../common/data-dy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  loadDY(): Observable <DataDY>{
    return this.http.get<DataDY>("https://api.disneyapi.dev/character")
  }
  reloadPag(pag: string): Observable<DataDY>{
    return this.http.get<DataDY>(pag);
  }
}
