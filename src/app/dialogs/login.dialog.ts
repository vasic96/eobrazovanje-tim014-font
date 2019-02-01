import { Component, OnInit, Inject } from "@angular/core";
import { Uplata } from "../interface/Uplata";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { KorisnikService } from "../services/korisnik.service";
import { UplataService } from "../uplata.service";



@Component({
    selector: 'login.dialog',
    templateUrl: 'login.dialog.html'
})
export class LoginDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public uplataService:UplataService,
        public dialogRef:MatDialogRef<LoginDialog>,
    ){}

    ngOnInit(): void {


    }

    forumSubmit(formData:Uplata):void{
        console.log(formData);
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }

    

}