import { Component, OnInit } from '@angular/core';
import { Obaveza } from '../interface/Obaveza';
import { MatDialog } from '@angular/material';
import { ObavezaDialog } from '../dialogs/obaveza.dialog';
import { ObavezaService } from '../services/obaveza.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { AuthenticationService } from '../security/authentication.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-obaveza',
  templateUrl: './obaveza.component.html',
  styleUrls: ['./obaveza.component.css']
})
export class ObavezaComponent implements OnInit {

  constructor(private dialog:MatDialog,private obavezaService:ObavezaService,
              private authService:AuthenticationService,
              private snackBarService:SnackBarService) { }

  obaveze:Obaveza[];
  loggedIn=false;
  role:string;

  ngOnInit() {
    this.getAll();
    this.loggedIn=this.authService.isLoggedIn();
    this.role=this.authService.getRole();
  }

  openDialog(mode:string,obaveza:Obaveza=<Obaveza>{}):void{
    const dialogRef = this.dialog.open(ObavezaDialog,{
      width:'400px',
      data:{mode:mode,obaveza:obaveza}
    })

    dialogRef.afterClosed().subscribe(
      resoult=>{
        if(resoult=="success"){
          this.getAll();
        }
      }
    )
    
    }

    poloziPredmet(id):void{
      if(confirm("Da li ste sigurni")){
      this.obavezaService.poloziPredmet(id).subscribe(
        success=>{this.getAll()
          this.snackBarService.openSnackBar("Predmet polozen!","ok")
        },
        error=>console.log(error)
      )
      }
    }
  

  getAll():void{
    this.obavezaService.getAll().subscribe(
      response=>this.obaveze=response,
      error=>console.log(error)
    )
  }

  deleteObaveza(obaveza:Obaveza){
    if(confirm("Zelite li da izbrisete obavezu?")){
      this.obavezaService.deleteObaveza(obaveza.id).subscribe(
        success=>this.getAll(),
        error=>console.log(error)
      )
    }
  }

}
