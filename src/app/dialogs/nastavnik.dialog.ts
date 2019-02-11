import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Nastavnik } from "../interface/Nastavnik";
import { KorisnikService } from "../services/korisnik.service";

@Component({
    selector: 'nastavnik.dialog',
    templateUrl: 'nastavnik.dialog.html'
})
export class NastavnikDialog implements OnInit{

    constructor(
        public dialogRef:MatDialogRef<NastavnikDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private korisnikService:KorisnikService
    ){}

    nastavnik:Nastavnik;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.nastavnik = this.dialogData.nastavnik;
        this.mode = this.dialogData.mode;

    }

    forumSubmit(formData:Nastavnik):void{
        if(this.mode=="edit"){
             formData.jmbg=this.nastavnik.jmbg;
        }
        this.korisnikService.uploadNastavnik(formData,this.mode).subscribe(
            resoult=>{
                this.dialogRef.close("success");
            },
            error=>{
                console.log(error);
            }
        )
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    

}