import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uplata } from './interface/Uplata';

@Injectable({
  providedIn: 'root'
})
export class UplataService {

  constructor(private _http:HttpClient) { }

  ucitajUplate(){
    return this._http.get<Uplata[]>("/api/uplate");
  }

  deleteUplata(id:number){
    return this._http.delete('api/uplata/'+id);
  }

  dodajUplatu(mode:string, uplata:Uplata){
    if(mode=="add"){
    return this._http.post("/api/uplata",uplata);
    } else {
      return this._http.put("/api/uplata",uplata);

    }

  }

}
