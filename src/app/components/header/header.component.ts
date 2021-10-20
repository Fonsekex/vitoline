import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {}
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  } 

  mostrarmenu(){
    this.menu.open('first');
  }
  buscar(){
    this.router.navigate(['buscar']);
  }
  home(){
    this.router.navigate(['home']);
  }
  favorito(){
    this.router.navigate(['favoritos']);
  }

}
