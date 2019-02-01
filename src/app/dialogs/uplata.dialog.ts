import { Component, OnInit, Inject } from "@angular/core";
import { Uplata } from "../interface/Uplata";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { KorisnikService } from "../services/korisnik.service";
import { UplataService } from "../uplata.service";
import { Student } from "../interface/Student";



@Component({
    selector: 'uplata.dialog',
    templateUrl: 'uplata.dialog.html'
})
export class UplataDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public uplataService:UplataService,
        public dialogRef:MatDialogRef<UplataDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData
    ){}

    uplata:Uplata;
    mode:string = "view";
    studenti:Student[];

    ngOnInit(): void {
        console.log(this.dialogData)
        this.uplata = this.dialogData.uplata;
        this.mode = this.dialogData.mode;
        this.ucitajStudente();

    }

    forumSubmit(formData:Uplata):void{
        console.log(formData);
        if(this.mode=="edit"){
            formData.id = this.uplata.id;
            formData.datumUplate = this.uplata.datumUplate;
            formData.brojIndeksa = this.uplata.brojIndeksa;
        }
        this.uplataService.dodajUplatu(this.mode,formData).subscribe(
            success=> this.onNoClick("success"),
            error => console.log("Nece nesto")
        );
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }

    ucitajStudente(){
        this.korisnikService.getStudents().subscribe(
          success=> this.studenti = success,
          error=> console.log("Greska prilikom ucitavanja studenata")
        )
      }
    

}