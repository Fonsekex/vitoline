import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaPageRoutingModule } from './programa-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { ProgramaPage } from './programa.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    ProgramaPageRoutingModule
  ],
  declarations: [ProgramaPage]
})
export class ProgramaPageModule {}
