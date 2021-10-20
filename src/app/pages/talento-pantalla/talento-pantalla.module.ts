import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from 'src/app/components/components.module';

import { TalentoPantallaPageRoutingModule } from './talento-pantalla-routing.module';

import { TalentoPantallaPage } from './talento-pantalla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TalentoPantallaPageRoutingModule
  ],
  declarations: [TalentoPantallaPage]
})
export class TalentoPantallaPageModule {}
