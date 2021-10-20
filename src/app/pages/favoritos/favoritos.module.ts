import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';

import { FavoritosPage } from './favoritos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    FavoritosPageRoutingModule
  ],
  declarations: [FavoritosPage]
})
export class FavoritosPageModule {}
