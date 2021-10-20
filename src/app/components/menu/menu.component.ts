import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interface-menu';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  
  componente: Observable<Componente[]>;
  constructor( private menu: MenuController,
               private dataService: DataService) { }

  ngOnInit() {
    this.componente = this.dataService.getMenuOpts();

  }

  openFirst() {
    this.menu.enable(true, 'main');
    this.menu.open('main');
  }

  openEnd() {
    this.menu.open('main');
  }

  openCustom() {
    this.menu.enable(true, 'main');
    this.menu.open('main');
  }

}
