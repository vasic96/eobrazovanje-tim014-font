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



@Component({
    selector: 'pohadja.dialog',
    templateUrl: 'pohadja.dialog.html'
})
export class PohadjaDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public uplataService:UplataService,
        public dialogRef:MatDialogRef<PohadjaDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetService:PredmetService,
        private obavezaService:ObavezaService
    ){}

    predmetId:number;
    studenti:Student[];
    predmeti:Predmet[];

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
        this.korisnikService.potencijalniStudenti(this.predmetId).subscribe(
          success=> this.studenti = success,
          error=> console.log("Greska prilikom ucitavanja studenata")
        )
      }



    
    

}