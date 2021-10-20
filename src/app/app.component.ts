import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interface-menu';
import { DataService } from './services/data.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  componente: Observable<Componente[]>;
  open?: boolean
  pages = [
    {
      nombre: "Programas",
      children: [
        {
          nombre: "Ultima Hora",
          url: "/programa",
          numero: 3,
          open: false
        },
        {
          nombre: "Hincha Amarillo",
          url: "/programa",
          numero: 1,
          open: false
        },
        {
          nombre: "Deporvito",
          url: "/programa",
          numero: 2,
          open: false
        },
        {
          nombre: "Fuull Farandula",
          url: "/programa",
          numero: 4,
          open: false
        },
        {
          nombre: "Especiales",
          url: "/programa",
          numero: 5,
          open: false
        },
        {
          nombre: "Sinfonia de Motores",
          url: "/programa",
          numero: 6,
          open: false
        },
        {
          nombre: "Horizonte Productivo",
          url: "/programa",
          numero: 7,
          open: false
        },

      ],
      open: false
    },
    {
      nombre: "Noticias",
      children: [
        {
          nombre: "Economía y Negocios",
          url: "/categoria",
          numero:2,
          open: false
        },
        {
          nombre: "Emprendimiento",
          url: "/categoria",
          numero:6,
          open: false
        },
        {
          nombre: "Tecnología",
          url: "/categoria",
          numero:3,
          open: false
        },
        {
          nombre: "Deportes",
          url: "/categoria",
          numero:1,
          open: false
        },
        {
          nombre: "Entretenimiento",
          url: "/categoria",
          numero:4,
          open: false
        }
      ],
      open: false
    },
    {
      nombre: "Nosotros",
      children: [
        {
          nombre: "Quienes Somos",
          url: "/quienes-somos",
          open: false
        },
        {
          nombre: "Talento de Pantalla",
          url: "/talento-pantalla",
          open: false
        },
        {
          nombre: "Nuestra Programación",
          url: "/programacion",
          open: false
        }
      ],
      open: false
    },
    {
      nombre: "En Vivo",
      url: "/home",
      open: false
    },
    {
      nombre: "Vivo Te Leo",
      url: "https://vitoteleo.vitotvo.com/",
      open: false
    }
  ]
  constructor(private dataService: DataService,
              private platform: Platform,
              private router: Router,
              private storage: Storage ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
       this.componente= this.dataService.getMenuOpts();
    });
    

  }
  aux="2"
  navegar(url){
    this.router.navigate(['programa', this.aux]);

  }
  
  async ngOnInit(){
    await this.storage.create();
  }
}
