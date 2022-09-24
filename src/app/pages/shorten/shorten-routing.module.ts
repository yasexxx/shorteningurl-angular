import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortenComponent } from './shorten.component';

const routes: Routes = [{ path: '', component: ShortenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortenRoutingModule { }
