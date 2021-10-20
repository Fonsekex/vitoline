import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentoPantallaPage } from './talento-pantalla.page';

const routes: Routes = [
  {
    path: '',
    component: TalentoPantallaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TalentoPantallaPageRoutingModule {}
