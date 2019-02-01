import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interface/Student';
import { Nastavnik } from '../interface/Nastavnik';
import { Korisnik } from '../interface/Korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private _http: HttpClient) { }

  getStudents(){
    return this._http.get<Student[]>("/api/students");
  }

  getNastavnici(){
    return this._http.get<Nastavnik[]>("/api/nastavnici")
  }

  getKorisnici(){
    return this._http.get<Korisnik[]>("/api/korisnici");
  }

  uploadStudent(student:Student,mode:string){
    if(mode=="add"){
      return this._http.post("/api/student",student);
    } else {
      return this._http.put("/api/student",student);
    }
  }
  


}
