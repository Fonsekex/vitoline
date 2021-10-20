import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HinchaAmarilloComponent } from './hincha-amarillo/hincha-amarillo.component';
import { UltimaHoraComponent } from './ultima-hora/ultima-hora.component';
import { DeporvitoComponent } from './deporvito/deporvito.component';
import { FullFarandulaComponent } from './full-farandula/full-farandula.component';
import { EspecialesComponent } from './especiales/especiales.component';
import { SinfoniaMotoresComponent } from './sinfonia-motores/sinfonia-motores.component';
import { HorizonteProductivoComponent } from './horizonte-productivo/horizonte-productivo.component';
import { HeaderDetalleComponent } from './header-detalle/header-detalle.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    UltimaHoraComponent,
    HinchaAmarilloComponent,
    DeporvitoComponent,
    FullFarandulaComponent,
    EspecialesComponent,
    SinfoniaMotoresComponent,
    HorizonteProductivoComponent,
    HeaderDetalleComponent
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HinchaAmarilloComponent,
    UltimaHoraComponent,
    DeporvitoComponent,
    FullFarandulaComponent,
    EspecialesComponent,
    SinfoniaMotoresComponent,
    HorizonteProductivoComponent,
    HeaderDetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
