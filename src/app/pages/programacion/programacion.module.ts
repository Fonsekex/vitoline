import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramacionPageRoutingModule } from './programacion-routing.module';

import { ProgramacionPage } from './programacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProgramacionPageRoutingModule
  ],
  declarations: [ProgramacionPage]
})
export class ProgramacionPageModule {}
