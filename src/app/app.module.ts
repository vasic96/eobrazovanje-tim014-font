import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MaterialModule } from './material.module';
import { DokumentListComponent } from './dokument-list/dokument-list.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DokumentService } from './services/dokument.service';
import { FormsModule } from '@angular/forms';
import { NoviDokumentDialog } from './dialogs/novi.dokument.dialog';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { StudentDialog } from './dialogs/student.dialog';
import { NastavnikDialog } from './dialogs/nastavnik.dialog';
import { UplateComponent } from './uplate/uplate.component';
import { UplataDialog } from './dialogs/uplata.dialog';
import { ObavezaComponent } from './obaveza/obaveza.component';
import { LoginDialog } from './dialogs/login.dialog';
import { TokenInterceptorService } from './security/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    DokumentListComponent,
    NoviDokumentDialog,
    KorisniciComponent,
    StudentDialog,
    NastavnikDialog,
    UplateComponent,
    UplataDialog,
    ObavezaComponent,
    LoginDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  entryComponents:[NoviDokumentDialog,StudentDialog,NastavnikDialog,UplataDialog,LoginDialog],
  providers: [DokumentService,HttpClient,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
