import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MaterialModule } from './material.module';
import { DokumentListComponent } from './dokument-list/dokument-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DokumentService } from './services/dokument.service';
import { FormsModule } from '@angular/forms';
import { NoviDokumentDialog } from './dialogs/novi.dokument.dialog';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { StudentDialog } from './dialogs/student.dialog';

@NgModule({
  declarations: [
    AppComponent,
    DokumentListComponent,
    NoviDokumentDialog,
    KorisniciComponent,
    StudentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  entryComponents:[NoviDokumentDialog,StudentDialog],
  providers: [DokumentService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
