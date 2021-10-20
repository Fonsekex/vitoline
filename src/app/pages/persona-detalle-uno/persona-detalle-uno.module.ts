import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaDetalleUnoPageRoutingModule } from './persona-detalle-uno-routing.module';

import { PersonaDetalleUnoPage } from './persona-detalle-uno.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PersonaDetalleUnoPageRoutingModule
  ],
  declarations: [PersonaDetalleUnoPage]
})
export class PersonaDetalleUnoPageModule {}
