import { Component, OnInit } from '@angular/core';
import { UplataService } from '../uplata.service';
import { Uplata } from '../interface/Uplata';
import { MatDialog } from '@angular/material';
import { UplataDialog } from '../dialogs/uplata.dialog';
import { KorisnikService } from '../services/korisnik.service';
import { Student } from '../interface/Student';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-uplate',
  templateUrl: './uplate.component.html',
  styleUrls: ['./uplate.component.css']
})
export class UplateComponent implements OnInit {

  constructor(public uplataService:UplataService,
              private dialog:MatDialog,
              private korisnikService:KorisnikService,
              private authService:AuthenticationService) { }

  uplate:Uplata[];
  studenti:Student[];
  loggedIn:boolean=false;
  role:string;

  ngOnInit() {
    this.loggedIn=this.authService.isLoggedIn();
    this.role=this.authService.getRole();
    if(this.role!="nastavnik"){
      this.loadUplate();
    }
  }

  loadUplate():void{
    this.uplataService.ucitajUplate().subscribe(
      success=> {
        this.uplate = success;
      },
      error=>console.log("Nece da ucita uplate")
    )
  }
  
  openDialog(mode,uplata:Uplata = <Uplata>{}):void{
    const dialogRef = this.dialog.open(UplataDialog,{
      width:'400px',
      data:{mode:mode,uplata:uplata}
    });

    dialogRef.afterClosed().subscribe(resoult=>{
      if(resoult=="success"){
        this.ngOnInit();
      }
    });
  }
  
  ucitajStudente(){
    this.korisnikService.getStudents().subscribe(
      success=> this.studenti = success,
      error=> console.log("Greska prilikom ucitavanja studenata")
    )
  }

  deleteUplata(uplata:Uplata){
    if(confirm("Da li zelite da izbrisete uplatu?")){
      this.uplataService.deleteUplata(uplata.id).subscribe(
        success=>this.loadUplate(),
        error=>console.log(error)
      )
    }
  }

  


}
