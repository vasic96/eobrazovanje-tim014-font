import { Component, OnInit } from '@angular/core';
import { DokumentService } from '../services/dokument.service';
import { Dokument } from '../interface/Dokument';
import { saveAs } from "file-saver";
import { SnackBarService } from '../services/snack-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { NoviDokumentDialog } from '../dialogs/novi.dokument.dialog';

@Component({
  selector: 'app-dokument-list',
  templateUrl: './dokument-list.component.html',
  styleUrls: ['./dokument-list.component.css']
})
export class DokumentListComponent implements OnInit {

  constructor(private dokumentService:DokumentService,
              private snackBarService:SnackBarService,
              public dialog: MatDialog) { }

  dokumenti:Dokument[];
  dokumentToUpload:File = null;

  ngOnInit() {
    this.ucitavanjeDokumenata();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NoviDokumentDialog, {
      width: '350px',
      data: {name: "Aleksandar"}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ucitavanjeDokumenata();

    });
  }
  onFileInput(files: FileList){
    this.dokumentToUpload = files.item(0);
  }

  documentUploadFunction(dokument){
    dokument.file = this.dokumentToUpload;
    console.log(dokument);
    this.dokumentService.uploadDoc(dokument).subscribe(
      success=> this.ucitavanjeDokumenata(),
      error=> console.log(error.message)
    );
  }

  ucitavanjeDokumenata(){
    this.dokumentService.sviDokumenti().subscribe(
      success => {
        this.dokumenti = success;
        console.log(this.dokumenti);
      },
      error=> console.log(error)
    )
  }

  deleteDoc(id:number){
    this.dokumentService.deleteDoc(id).subscribe(
      success=>{
        this.ucitavanjeDokumenata();
        this.openSnackBar("Dokument je obrisan");
      }, error=>{
        console.log(error);
      }
    )
  }
  
  openSnackBar(message:string){
    this.snackBarService.openSnackBar(message,"ok");
  }

  downloadDoc(fileName:string){
    this.dokumentService.downloadFile(fileName).subscribe(
      success=>{
        var blob = new Blob([success]);
        saveAs(blob,fileName.split("/")[1])
      },error=>{
        console.log(error)
      }
    )
  }
}
