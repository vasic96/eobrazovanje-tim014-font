import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DokumentService } from '../services/dokument.service';
import { KorisnikService } from '../services/korisnik.service';
import { Student } from '../interface/Student';
import { AuthenticationService } from '../security/authentication.service';


@Component({
    selector: 'novi.dokument.dialog',
    templateUrl: 'novi.dokument.dialog.html',
  })
  export class NoviDokumentDialog implements OnInit{

  constructor(
    public dokumentService:DokumentService,
    public dialogRef: MatDialogRef<NoviDokumentDialog>,
    @Inject(MAT_DIALOG_DATA) public dokument,
    private korisnikService:KorisnikService,
    private authService:AuthenticationService) {}
    
    dokumentToUpload:File = null;
    studenti:Student[];
    isLoggedIn:boolean=false;
    role:string="";
    ngOnInit(): void {
      this.isLoggedIn=this.authService.isLoggedIn();
      this.role = this.authService.getRole();
      this.ucitavanjeStudenata();
    }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileInput(files: FileList){
    this.dokumentToUpload = files.item(0);
  }

  documentUploadFunction(dokument){
    dokument.file = this.dokumentToUpload;
    console.log(dokument);
    this.dokumentService.uploadDoc(dokument).subscribe(
      success=> this.dialogRef.close("success"),
      error=> console.log(error.message)
    );
  }

  ucitavanjeStudenata(){
    this.korisnikService.getStudents().subscribe(
      success=>{
        this.studenti = success;
      },
      error=> console.log(error)
    );
  }

  }