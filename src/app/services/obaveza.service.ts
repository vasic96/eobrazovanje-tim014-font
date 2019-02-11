import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Obaveza } from '../interface/Obaveza';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObavezaService {

  constructor(private _http:HttpClient) { }

  dodaj(obaveza:Obaveza){
    return this._http.post('/api/obaveza',obaveza);
  }

  getAll(){
    return this._http.get<Obaveza[]>('/api/obaveze');
  }
  
  poloziPredmet(id){
    return this._http.get('/api/obaveza/polozen/'+id)
  }

  deleteObaveza(id:number){
    return this._http.delete('/api/obaveza/'+id);
  }


}
