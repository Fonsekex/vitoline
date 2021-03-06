import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoDetallePageRoutingModule } from './video-detalle-routing.module';

import { VideoDetallePage } from './video-detalle.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    VideoDetallePageRoutingModule
  ],
  declarations: [VideoDetallePage]
})
export class VideoDetallePageModule {}
