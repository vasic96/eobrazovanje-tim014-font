import { Component, OnInit } from '@angular/core';
import { Student } from '../interface/Student';
import { Nastavnik } from '../interface/Nastavnik';
import { KorisnikService } from '../services/korisnik.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PohadjaDialog } from '../dialogs/pohadja.dialog';
import { Pohadja } from '../interface/Pohadja';
import { PohadjaPredajeService } from '../services/pohadja.predaje.service';
import { PredajeDialog } from '../dialogs/predaje.dialog';

@Component({
  selector: 'app-predmet-info',
  templateUrl: './predmet-info.component.html',
  styleUrls: ['./predmet-info.component.css']
})
export class PredmetInfoComponent implements OnInit {

  constructor(private korisnikService: KorisnikService,
    private pohadjaPredajeService:PohadjaPredajeService,
    private route: ActivatedRoute,
    private dialog:MatDialog) {
    this.predmetId = parseInt(this.route.snapshot.queryParamMap.get('id'));
  }

  studenti: Student[];
  potencijalniStudenti: Student[];
  nastavnici: Nastavnik[];
  potencijalniNastavnici:Nastavnik[];
  predmetId: number = 0;
  idNotFound:boolean=true;


  ngOnInit() {
    if(isNaN(this.predmetId)){
      this.idNotFound=true;
    }else{
      this.idNotFound=false;
      this.studentiKojiPohadjaju();
      this.getNastavnici();
    }
  }

  studentiKojiPohadjaju(): void {
    this.korisnikService.getByPredmetId(this.predmetId).subscribe(
      response => this.studenti = response,
      error => console.log(error)
    )
  }


  getNastavnici(): void {
    this.korisnikService.getNastavnikByPredmetId(this.predmetId).subscribe(
      response => this.nastavnici = response,
      error => console.log(error)
    )
  }

  openStudDialog(): void {
    const dialogRef = this.dialog.open(PohadjaDialog,{
      width:'400px',
      data:{predmetId:this.predmetId}
    })

    dialogRef.afterClosed().subscribe(
      (pohadja:Pohadja)=>{
        pohadja.predmetId=this.predmetId;
        console.log(pohadja);
        this.pohadjaPredajeService.novoPohadjanje(pohadja).subscribe(
          success=>this.ngOnInit(),
          error=>console.log(error)
        )
      }
    )
  }

  openNastDialog():void{
    const dialogRef = this.dialog.open(PredajeDialog,{
      width:'350px',
      data:{predmetId:this.predmetId}
    })

    dialogRef.afterClosed().subscribe(
      (pohadja:Pohadja)=>{
        pohadja.predmetId=this.predmetId;
        console.log(pohadja);
        this.pohadjaPredajeService.novoPredavanje(pohadja).subscribe(
          success=>this.ngOnInit(),
          error=>console.log(error)
        )
      }
    )
  }

  deletePredaje(jmbg){
    if(confirm("Zelite li da izbrisete nastavnika sa ovog predmeta?")){
    this.pohadjaPredajeService.deletePredaje(this.predmetId,jmbg).subscribe(
      success=>this.ngOnInit(),
      error=>console.log(error)
    )
  }}

  deletePohadja(jmbg){
    if(confirm("Zelite li da izbrisete studenta sa ovog predmeta?")){
    this.pohadjaPredajeService.deletePohadja(this.predmetId,jmbg).subscribe(
      success=>this.ngOnInit(),
      error=>console.log(error)
    )
  }}


}
