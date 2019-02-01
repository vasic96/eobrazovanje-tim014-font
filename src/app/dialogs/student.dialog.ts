import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Student } from "../interface/Student";
import { KorisnikService } from "../services/korisnik.service";


@Component({
    selector: 'sudent.dialog',
    templateUrl: 'student.dialog.html'
})
export class StudentDialog implements OnInit{

    constructor(
        public korisnikService:KorisnikService,
        public dialogRef:MatDialogRef<StudentDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData
    ){}

    student:Student;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.student = this.dialogData.student;
        this.mode = this.dialogData.mode;

    }

    forumSubmit(formData:Student):void{
        console.log(formData);
        if(this.mode=="edit"){
            formData.jmbg = this.student.jmbg
        }
        this.korisnikService.uploadStudent(formData,this.mode).subscribe(
            success=> this.onNoClick("success"),
            error => console.log("Nece nesto")
        );
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }
    

}