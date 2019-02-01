import { Component, OnInit, Inject } from "@angular/core";
import { Uplata } from "../interface/Uplata";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { KorisnikService } from "../services/korisnik.service";
import { UplataService } from "../uplata.service";
import { AuthenticationService } from "../security/authentication.service";
import { LoginData } from "../interface/LoginData";



@Component({
    selector: 'login.dialog',
    templateUrl: 'login.dialog.html'
})
export class LoginDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public uplataService:UplataService,
        public dialogRef:MatDialogRef<LoginDialog>,
        private authService:AuthenticationService
    ){}

    ngOnInit(): void {


    }

    // forumSubmit(formData:LoginData):void{
    //     this.authService.login(formData.username,formData.password).subscribe(
    //         (loggedIn:boolean)=>{
    //             if(loggedIn){
    //                 console.log("Uspesno prijavljen");
    //             }
    //         }
    //     )
    // }


    forumSubmit(formData:LoginData):void{
        this.authService.login(formData).subscribe(
            success=> console.log(success),
            error=>console.log(error.message)
        )
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    

}