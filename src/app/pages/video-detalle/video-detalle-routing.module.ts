import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetallePage } from './video-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VideoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDetallePageRoutingModule {}
