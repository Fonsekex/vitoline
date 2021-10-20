import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaDetalleUnoPage } from './persona-detalle-uno.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaDetalleUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaDetalleUnoPageRoutingModule {}
