import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/Student';
import { KorisnikService } from '../services/korisnik.service';
import { MatDialog } from '@angular/material';
import { StudentDialog } from '../dialogs/student.dialog';
import { Nastavnik } from '../interface/Nastavnik';
import { NastavnikDialog } from '../dialogs/nastavnik.dialog';
import { Korisnik } from '../interface/Korisnik';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  constructor(private korisnikService:KorisnikService,
              private dialog:MatDialog,
              private snackBarService:SnackBarService) { }

  studenti:Student[];
  nastavnici:Nastavnik[];
  korisnici:Korisnik[];

  ngOnInit() {
    this.loadStudents();
    this.loadNastavnici();
    this.loadKorisnici();
  }

  deleteNastavnik(nastavnik:Nastavnik){
    if(confirm("Zelite li da izbrisete nastavnika " + nastavnik.ime + " " + nastavnik.prezime)){
      this.korisnikService.deleteNastavnik(nastavnik.jmbg).subscribe(
        success=>{this.loadNastavnici();
          this.snackBarService.openSnackBar("Nastavnik uspesno izbrisan","ok")
        },
        error=>this.snackBarService.openSnackBar("Problem sa brisanjem nastavnika!","ok")
      )
    }
  }


  loadStudents(){
    this.korisnikService.getStudents().subscribe(
      success=> {
        this.studenti = success;
      }, error => {
        this.snackBarService.openSnackBar("Problem sa ucitavanjem studenata!","ok")
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
      if(result=="success"){
        this.loadNastavnici();
      }
    });
  }



}
