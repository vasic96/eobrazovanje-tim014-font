import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DokumentListComponent } from './dokument-list/dokument-list.component';

const routes: Routes = [
  {path:'dokumenti',component:DokumentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
