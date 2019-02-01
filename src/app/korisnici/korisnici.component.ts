import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/Student';
import { KorisnikService } from '../services/korisnik.service';
import { MatDialog } from '@angular/material';
import { StudentDialog } from '../dialogs/student.dialog';
import { Nastavnik } from '../interface/Nastavnik';
import { NastavnikDialog } from '../dialogs/nastavnik.dialog';
import { Korisnik } from '../interface/Korisnik';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  constructor(private korisnikService:KorisnikService,
              private dialog:MatDialog) { }

  studenti:Student[];
  nastavnici:Nastavnik[];
  korisnici:Korisnik[];

  ngOnInit() {
    this.loadStudents();
    this.loadNastavnici();
    this.loadKorisnici();
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

  loadNastavnici(){
    this.korisnikService.getNastavnici().subscribe(
      success=> {
        this.nastavnici = success;
      }, error => {
        console.log("Ucitavanje nije uspelo!")
      }
    )
  }

  loadKorisnici(){
    this.korisnikService.getKorisnici().subscribe(
      success=> {
        this.korisnici = success;
      }, error => {
        console.log("Ucitavanje nije uspelo!")
      }
    )
  }


  openStudDialog(mode,student:Student = <Student>{}):void{
    const dialogRef = this.dialog.open(StudentDialog,{
      width:'400px',
      data: {mode:mode,student:student}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result=="success"){
        this.ngOnInit();
      }
    });
  }

  openNastDialog(mode,student:Nastavnik = <Nastavnik>{}):void{
    const dialogRef = this.dialog.open(NastavnikDialog,{
      width:'400px',
      data: {mode:mode,nastavnik:student}
    });

    dialogRef.afterClosed().subscribe(result=>{

    });
  }



}
