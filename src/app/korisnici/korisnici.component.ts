import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/Student';
import { KorisnikService } from '../services/korisnik.service';
import { MatDialog } from '@angular/material';
import { StudentDialog } from '../dialogs/student.dialog';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  constructor(private korisnikService:KorisnikService,
              private dialog:MatDialog) { }

  studenti:Student[];

  ngOnInit() {
    this.loadStudents();
  }


  loadStudents(){
    this.korisnikService.getStudents().subscribe(
      success=> {
        this.studenti = success;
      }, error => {
        console.log("Ucitavanje nije uspelo!")
      }
    )
  }

  openDialog(mode,student:Student = <Student>{}):void{
    const dialogRef = this.dialog.open(StudentDialog,{
      width:'400px',
      data: {mode:mode,student:student}
    });

    dialogRef.afterClosed().subscribe(result=>{

    });
  }

}
