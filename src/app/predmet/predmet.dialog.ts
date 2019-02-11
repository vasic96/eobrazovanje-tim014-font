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
import { AuthenticationService } from "../security/authentication.service";



@Component({
    selector: 'predmet.dialog',
    templateUrl: 'predmet.dialog.html'
})
export class PredmetDialog implements OnInit{

    constructor(
        public dialogRef:MatDialogRef<PredmetDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetService:PredmetService
    ){}

    predmet:Predmet;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.mode = this.dialogData.mode;
        this.predmet=this.dialogData.predmet;
    }


    submitForm(formData:Predmet):void{
        if(this.mode=="edit"){
            formData.predmetId=this.predmet.predmetId;
        }
        this.predmetService.postPredmet(this.mode,formData).subscribe(
            success=>this.dialogRef.close("success"),
            error=>console.log(error)
        )
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }


}