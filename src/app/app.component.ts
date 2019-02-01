import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialog } from './dialogs/login.dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public dialog:MatDialog){}

  ngOnInit(): void {
  }


  title = 'app';

  openLoginDialog():void{
    const dialogRef = this.dialog.open(LoginDialog,{
      width:'350px'
    });
    
  }
}
