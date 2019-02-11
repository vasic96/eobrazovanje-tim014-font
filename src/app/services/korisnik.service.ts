import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interface/Student';
import { Nastavnik } from '../interface/Nastavnik';
import { Korisnik } from '../interface/Korisnik';
import { PasswordChange } from '../interface/PasswordChange';

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

  uploadNastavnik(nastavnik:Nastavnik,mode:string){
    if(mode=="add"){
      return this._http.post("/api/nastavnik",nastavnik);
    } else {
      return this._http.put("/api/nastavnik",nastavnik);
    }
  }

  deleteStudent(id:number){
    return this._http.delete("/api/student/"+id);
  }

  deleteNastavnik(id:number){
    return this._http.delete("/api/nastavnik/"+id);
  }

  getByPredmetId(id){
    return this._http.get<Student[]>('/api/students/'+id);
  }

  getNastavnikByPredmetId(id){
    return this._http.get<Nastavnik[]>('/api/nastavnik/'+id);
  }

  potencijalniNastavnici(id){
    return this._http.get<Nastavnik[]>('/api/nastavnik/not/'+id)
  }

  potencijalniStudenti(predmetId){
    return this._http.get<Student[]>('/api/students/not/'+predmetId);
  }

  changePassowrd(data:PasswordChange){
    return this._http.post('/api/lozinka',data);
  }
  


}
