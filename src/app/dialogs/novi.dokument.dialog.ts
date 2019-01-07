import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DokumentService } from '../services/dokument.service';


@Component({
    selector: 'novi.dokument.dialog',
    templateUrl: 'novi.dokument.dialog.html',
  })
  export class NoviDokumentDialog {
  constructor(
    public dokumentService:DokumentService,
    public dialogRef: MatDialogRef<NoviDokumentDialog>,
    @Inject(MAT_DIALOG_DATA) public dokument) {}
    
    dokumentToUpload:File = null;

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
  }