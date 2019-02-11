import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dokument } from '../interface/Dokument';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class DokumentService {

  constructor(private _http: HttpClient) { }


  sviDokumenti(){
    return this._http.get<Dokument[]>("api/dokument/all")
  }

  downloadFile(fileName:string){
    return this._http.get("/api/downloadFile/"+fileName, { responseType: 'blob' });
  }

  deleteDoc(id:number){
    return this._http.delete("/api/dokument/"+id);
  }

  uploadDoc(document){
    console.log(document);
    let formData: FormData = new FormData();
    formData.append('file',document.file,document.file.name)
    formData.append('dokument',JSON.stringify(document.dokument));
    return this._http.post("api/uploadDoc",formData);
  }

}
