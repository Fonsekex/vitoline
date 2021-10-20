import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-persona-detalle-uno',
  templateUrl: './persona-detalle-uno.page.html',
  styleUrls: ['./persona-detalle-uno.page.scss'],
})
export class PersonaDetalleUnoPage implements OnInit {
  presentador=""
  constructor( private router: ActivatedRoute ) {
    this.presentador = this.router.snapshot.paramMap.get('presentador');
    console.log(this.presentador);
   }

  ngOnInit() {
  }

}
