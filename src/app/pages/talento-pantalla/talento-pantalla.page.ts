import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talento-pantalla',
  templateUrl: './talento-pantalla.page.html',
  styleUrls: ['./talento-pantalla.page.scss'],
})
export class TalentoPantallaPage implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  detalle(presentador){
    this.router.navigate(['persona-detalle-uno',presentador]);

  }

}
