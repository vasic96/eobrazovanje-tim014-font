import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DokumentListComponent } from './dokument-list/dokument-list.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { UplateComponent } from './uplate/uplate.component';
import { ObavezaComponent } from './obaveza/obaveza.component';
import { PredmetComponent } from './predmet/predmet.component';
import { PredmetInfoComponent } from './predmet-info/predmet-info.component';

const routes: Routes = [
  {path:'dokumenti',component:DokumentListComponent},
  {path:'korisnici',component:KorisniciComponent},
  {path:'uplate',component:UplateComponent},
  {path:'obaveza',component:ObavezaComponent},
  {path:'predmeti',component:PredmetComponent},
  {path:'predmet-info',component:PredmetInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
