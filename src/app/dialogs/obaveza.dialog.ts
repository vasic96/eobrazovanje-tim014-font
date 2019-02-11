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



@Component({
    selector: 'obaveza.dialog',
    templateUrl: 'obaveza.dialog.html'
})
export class ObavezaDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public uplataService:UplataService,
        public dialogRef:MatDialogRef<ObavezaDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetService:PredmetService,
        private obavezaService:ObavezaService
    ){}

    obaveza:Obaveza;
    mode:string = "view";
    studenti:Student[];
    predmeti:Predmet[];

    ngOnInit(): void {
        console.log(this.dialogData)
        this.obaveza = this.dialogData.obaveza;
        this.mode = this.dialogData.mode;
        this.ucitajPredmete();
        if(this.mode=="add"){
            this.obaveza.polozen=false;
        }

    }

    onPredmetChange(val){
        this.korisnikService.getByPredmetId(val).subscribe(
            response=>{
                this.studenti=response;
            },
            error=>console.log(error)
        )
    }

    // forumSubmit(formData:Uplata):void{
    //     console.log(formData);
    //     if(this.mode=="edit"){
    //         formData.id = this.uplata.id;
    //         formData.datumUplate = this.uplata.datumUplate;
    //         formData.brojIndeksa = this.uplata.brojIndeksa;
    //     }
    //     this.uplataService.dodajUplatu(this.mode,formData).subscribe(
    //         success=> this.onNoClick("success"),
    //         error => console.log("Nece nesto")
    //     );
    // }

    forumSubmit(formData:Obaveza):void{
        console.log(formData);
        this.obavezaService.dodaj(formData).subscribe(
            success=>this.dialogRef.close("success"),
            error=>console.log(error)
        )
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
    
    ucitajPredmete(){
        this.predmetService.getAll().subscribe(
            success=>this.predmeti=success,
            error=>console.log(error)
        );
    }


    
    

}