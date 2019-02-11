import { Injectable } from '@angular/core';
import { Predmet } from '../interface/Predmet';
import { HttpClient } from '@angular/common/http';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private _http:HttpClient) { }

  getAll(){
    return this._http.get<Predmet[]>("/api/predmeti");
  }

  getAllPaged(page:number,pageSize:number){
    return this._http.get<Page>('api/predmeti/paged?page='+page+'&direction=ASC&order=opis&size='+pageSize);
  }

  postPredmet(mode:string,predmet:Predmet){
    if(mode=="add"){
      return this._http.post("api/predmet",predmet);
    } else if(mode=="edit"){
      return this._http.put("api/predmet/"+predmet.predmetId,predmet);
    }
  }

  deletePredmet(predmet:Predmet){
    return this._http.delete('api/predmet/'+predmet.predmetId);
  }

  getAllPohadja(){
    return this._http.get<Predmet[]>('api/predmeti/pohadja');
  }

  getAllPredaje(){
    return this._http.get<Predmet[]>('api/predmeti/predaje');
  }
}
