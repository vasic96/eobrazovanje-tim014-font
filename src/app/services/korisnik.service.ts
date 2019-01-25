import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interface/Student';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private _http: HttpClient) { }

  getStudents(){
    return this._http.get<Student[]>("/api/students");
  }
  


}
