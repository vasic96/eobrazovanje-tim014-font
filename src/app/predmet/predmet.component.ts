import { Component, OnInit } from '@angular/core';
import { PredmetService } from '../services/predmet.service';
import { Predmet } from '../interface/Predmet';
import { MatDialog } from '@angular/material';
import { PredmetDialog } from './predmet.dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  constructor(private predmetService:PredmetService,
              private dialog:MatDialog,
              private router:Router,
              private authService:AuthenticationService) { }

  predmeti:Predmet[];
  loggedIn:boolean=false;
  role:string;
  predmetiPohadja:Predmet[];

  ngOnInit() :void{
    this.loggedIn=this.authService.isLoggedIn();
    this.role=this.authService.getRole();
    this.getAll();
    if(this.role=="student"){
      this.getAllPredmetPohadja();
    } 
    if(this.role=="nastavnik"){
      this.getAllPredmetPredaje();
    }
    
  }

  openDialog(mode:string,predmet:Predmet = <Predmet >{}){
    const dialogRef = this.dialog.open(PredmetDialog,{
      width:'400px',
      data:{mode:mode,predmet:predmet},
    });
    dialogRef.afterClosed().subscribe(resoult=>{
      if(resoult=="success"){
        this.getAll();
      }
    })
  }

  getAll():void{
    this.predmetService.getAll().subscribe(
      response=>this.predmeti=response,
      error=>console.log(error)
    )
  }
  deletePredmet(predmet:Predmet):void{
    if(confirm("Zelite li da izbrisete predmet " + predmet.naziv +" ?",)){
      this.predmetService.deletePredmet(predmet).subscribe(
        success=> this.getAll(),
        error=>console.log(error)
      )
    }
  }

  openPredmet(predmet:Predmet):void{
    this.router.navigate(['/predmet-info'],{queryParams:{id:predmet.predmetId}});
  }

  getAllPredmetPohadja(){
    this.predmetService.getAllPohadja().subscribe(
      success=>this.predmetiPohadja = success,
      error=>console.log(error)
    )
  }

  getAllPredmetPredaje(){
    this.predmetService.getAllPredaje().subscribe(
      success=>this.predmetiPohadja = success,
      error=>console.log(error)
    )
  }

}
