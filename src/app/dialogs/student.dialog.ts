import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Student } from "../interface/Student";


@Component({
    selector: 'sudent.dialog',
    templateUrl: 'student.dialog.html'
})
export class StudentDialog implements OnInit{

    constructor(
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

    }

    onNoClick(): void {
        this.dialogRef.close();
      }
    

}