import { Component, OnInit, Inject } from "@angular/core";
import { Uplata } from "../interface/Uplata";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { KorisnikService } from "../services/korisnik.service";
import { UplataService } from "../uplata.service";
import { Student } from "../interface/Student";
import { Obaveza } from "../interface/Obaveza";
import { Predmet } from "../interface/Predmet";
import { PredmetService } from "../services/predmet.service";
import { ObavezaService } from "../services/obaveza.service";
import { Pohadja } from "../interface/Pohadja";
import { Nastavnik } from "../interface/Nastavnik";



@Component({
    selector: 'predaje.dialog',
    templateUrl: 'predaje.dialog.html'
})
export class PredajeDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public dialogRef:MatDialogRef<PredajeDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetService:PredmetService,
    ){}

    predmetId:number;
    nastavnici:Nastavnik[];

    ngOnInit(): void {
        this.predmetId=this.dialogData.predmetId;
        this.ucitajStudente();

    }

    forumSubmit(formData:Pohadja):void{
        this.dialogRef.close(formData);
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }

    ucitajStudente(){
        this.korisnikService.potencijalniNastavnici(this.predmetId).subscribe(
          success=> this.nastavnici = success,
          error=> console.log("Greska prilikom ucitavanja studenata")
        )
      }



    
    

}