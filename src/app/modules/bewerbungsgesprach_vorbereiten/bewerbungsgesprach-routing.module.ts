import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BewerbungsgesprachComponent } from './bewerbungsgesprach_vorbereiten.component';
import { MsLehrPreviewComponent } from './ms-lehr-preview/ms-lehr-preview.component';
import { MsSchnPreviewComponent } from './ms-schn-preview/ms-schn-preview.component';

const routes: Routes = [
  { path: '', component: BewerbungsgesprachComponent },

  { path: 'lehr-preview', component: MsLehrPreviewComponent },

  { path: 'schn-preview', component: MsSchnPreviewComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BewerbungsgesprachRoutingModule { }
