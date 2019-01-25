import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DokumentListComponent } from './dokument-list/dokument-list.component';
import { KorisniciComponent } from './korisnici/korisnici.component';

const routes: Routes = [
  {path:'dokumenti',component:DokumentListComponent},
  {path:'korisnici',component:KorisniciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
