import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pohadja } from '../interface/Pohadja';

@Injectable({
  providedIn: 'root'
})
export class PohadjaPredajeService {

  constructor(private _http:HttpClient) { }

  novoPohadjanje(pohadja:Pohadja){
    return this._http.post('/api/pohadja',pohadja);
  }

  novoPredavanje(predaje:Pohadja){
    return this._http.post("/api/predaje",predaje);
  }

  deletePredaje(predmetId,jmbg){
    return this._http.delete("/api/predaje/"+predmetId+"/"+jmbg);
  }

  deletePohadja(predmetId,jmbg){
    return this._http.delete("/api/pohadja/"+predmetId+"/"+jmbg);
  }

}
