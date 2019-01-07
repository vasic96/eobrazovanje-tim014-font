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

@NgModule({
  declarations: [
    AppComponent,
    DokumentListComponent,
    NoviDokumentDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  entryComponents:[NoviDokumentDialog],
  providers: [DokumentService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
