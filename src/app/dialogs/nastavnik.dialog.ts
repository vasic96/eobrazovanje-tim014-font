import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Nastavnik } from "../interface/Nastavnik";

@Component({
    selector: 'nastavnik.dialog',
    templateUrl: 'nastavnik.dialog.html'
})
export class NastavnikDialog implements OnInit{

    constructor(
        public dialogRef:MatDialogRef<NastavnikDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData
    ){}

    student:Nastavnik;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.student = this.dialogData.nastavnik;
        this.mode = this.dialogData.mode;

    }

    forumSubmit(formData:Nastavnik):void{

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    

}