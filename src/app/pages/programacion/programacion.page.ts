import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.page.html',
  styleUrls: ['./programacion.page.scss'],
})
export class ProgramacionPage implements OnInit {
  
  programacionl = [
   {
     dia: "LUNES",
     childres: [
       {
         programa: "ÚLTIMA HORA",
         hora: '07:00'
       },
       {
        programa: "LOS COMENTARISTAS",
        hora: '08:00'
       },
       {
        programa: "ESPECIAL",
        hora: '09:30'
       },
       {
        programa: "ESPECIAL",
        hora: '10:00'
       },
       {
        programa: "DOLCEVITO",
        hora: '11:30'
       },
       {
        programa: "FASHION PLANET",
        hora: '12:00'
       },
       {
        programa: "DEPORTES AL INSTANTE",
        hora: '12:30'
       },
       {
        programa: "FUUL FARANDULA",
        hora: '12:45'
       },
       {
        programa: "AZUL ELECTRICO",
        hora: '13:30'
       },
       {
        programa: "MICROINFORMATIVO",
        hora: '14:00'
       },
       {
        programa: "ESPECIAL",
        hora: '14:30'
       },
       {
        programa: "UH EMPRENDE",
        hora: '15:00'
       },
       {
        programa: "DEPORVITO",
        hora: '15:30'
       },
       {
        programa: "HINCHA AMARILLO",
        hora: '16:00'
       },
       {
        programa: "ULTIMA HORA",
        hora: '17:00'
       },
       {
        programa: "COFFEE BUSINESS",
        hora: '18:00'
       },
       {
        programa: "IDOLO TV",
        hora: '19:00'
       },
       {
        programa: "SINFONIA DE MOTORES",
        hora: '20:00'
       },
       {
        programa: "FUULL NIGHT",
        hora: '21:00'
       },
       {
        programa: "ANGELO PRESENTA",
        hora: '22:00'
       },
       {
        programa: "FASHION PLANET",
        hora: '23:00'
       }

     ]
   }

  ];

  programacionm = [
    {
      dia: "MARTES",
      childres: [
        {
          programa: "ÚLTIMA HORA",
          hora: '07:00'
        },
        {
         programa: "LOS COMENTARISTAS",
         hora: '08:00'
        },
        {
         programa: "ESPECIAL",
         hora: '09:30'
        },
        {
         programa: "ESPECIAL",
         hora: '10:00'
        },
        {
         programa: "ESPECIAL",
         hora: '11:00'
        },
        {
         programa: "DOLCEVITO",
         hora: '11:30'
        },
        {
         programa: "FASHION PLANET",
         hora: '12:00'
        },
        {
         programa: "DEPORTES AL INSTANTE",
         hora: '12:30'
        },
        {
         programa: "FUUL FARANDULA",
         hora: '12:45'
        },
        {
         programa: "AZUL ELECTRICO",
         hora: '13:30'
        },
        {
         programa: "MICROINFORMATIVO",
         hora: '14:00'
        },
        {
         programa: "RECTA FINAL",
         hora: '14:30'
        },
        {
         programa: "ESPECIAL",
         hora: '15:00'
        },
        {
         programa: "DEPORVITO",
         hora: '15:30'
        },
        {
         programa: "HINCHA AMARILLO",
         hora: '16:00'
        },
        {
         programa: "ULTIMA HORA",
         hora: '17:00'
        },
        {
         programa: "ECUADOR MÁS VERDE",
         hora: '18:00'
        },
        {
         programa: "ESPECIAL",
         hora: '18:30'
        },
        {
         programa: "IDOLO TV",
         hora: '19:00'
        },
        {
         programa: "UH EMPRENDE",
         hora: '20:00'
        },
        {
         programa: "BISANTI",
         hora: '20:30'
        },
        {
         programa: "FUULL NIGHT",
         hora: '21:00'
        },
        {
         programa: "CHARLA SOBRE EL TAPETE",
         hora: '22:00'
        },
        {
         programa: "AL FILO DE LA REALIDAD",
         hora: '23:00'
        }
 
      ]
    }
 
  ];

  programacionmi = [
    {
      dia: "MIERCOLES",
      childres: [
        {
          programa: "ÚLTIMA HORA",
          hora: '07:00'
        },
        {
         programa: "LOS COMENTARISTAS",
         hora: '08:00'
        },
        {
         programa: "ESPECIAL",
         hora: '09:30'
        },
        {
         programa: "ESPECIAL",
         hora: '10:00'
        },
        {
         programa: "ESPECIAL",
         hora: '11:00'
        },
        {
         programa: "DOLCEVITO",
         hora: '11:30'
        },
        {
         programa: "FASHION PLANET",
         hora: '12:00'
        },
        {
         programa: "DEPORTES AL INSTANTE",
         hora: '12:30'
        },
        {
         programa: "FUUL FARANDULA",
         hora: '12:45'
        },
        {
         programa: "AZUL ELECTRICO",
         hora: '13:30'
        },
        {
         programa: "MICROINFORMATIVO",
         hora: '14:00'
        },
        {
         programa: "RECTA FINAL",
         hora: '14:30'
        },
        {
         programa: "UH EMPRENDE",
         hora: '15:00'
        },
        {
         programa: "DEPORVITO",
         hora: '15:30'
        },
        {
         programa: "HINCHA AMARILLO",
         hora: '16:00'
        },
        {
         programa: "ULTIMA HORA",
         hora: '17:00'
        },
        {
         programa: "NOTIIERO UESS",
         hora: '18:00'
        },
        {
         programa: "ECUADOR SOBRE",
         hora: '18:30'
        },
        {
         programa: "IDOLO TV",
         hora: '19:00'
        },
        {
         programa: "TU VOZ",
         hora: '20:00'
        },
        {
         programa: "FUULL NIGHT",
         hora: '21:00'
        },
        {
         programa: "ANGELO PRESENTA",
         hora: '22:00'
        },
        {
         programa: "FASHION PLANET",
         hora: '23:00'
        }
 
      ]
    }
 
  ];

  programacionju = [
    {
      dia: "JUEVES",
      childres: [
        {
          programa: "ÚLTIMA HORA",
          hora: '07:00'
        },
        {
         programa: "LOS COMENTARISTAS",
         hora: '08:00'
        },
        {
         programa: "ESPECIAL",
         hora: '09:30'
        },
        {
         programa: "ESPECIAL",
         hora: '10:00'
        },
        {
         programa: "ESPECIAL",
         hora: '11:00'
        },
        {
         programa: "DOLCEVITO",
         hora: '11:30'
        },
        {
         programa: "FASHION PLANET",
         hora: '12:00'
        },
        {
         programa: "DEPORTES AL INSTANTE",
         hora: '12:30'
        },
        {
         programa: "FUUL FARANDULA",
         hora: '12:45'
        },
        {
         programa: "AZUL ELECTRICO",
         hora: '13:30'
        },
        {
         programa: "MICROINFORMATIVO",
         hora: '14:00'
        },
        {
         programa: "SALUD",
         hora: '14:30'
        },
        {
         programa: "FEDEGUAYAS",
         hora: '15:00'
        },
        {
         programa: "DEPORVITO",
         hora: '15:30'
        },
        {
         programa: "HINCHA AMARILLO",
         hora: '16:00'
        },
        {
         programa: "ULTIMA HORA",
         hora: '17:00'
        },
        {
         programa: "ECUADOR MAS VERDE",
         hora: '18:00'
        },
        {
         programa: "ESPECIAL",
         hora: '18:30'
        },
        {
         programa: "IDOLO TV",
         hora: '19:00'
        },
        {
         programa: "TENDENCIAS",
         hora: '20:00'
        },
        {
         programa: "ESPECIAL",
         hora: '20:30'
        },
        {
         programa: "FUULL NIGHT",
         hora: '21:00'
        },
        {
         programa: "ESPECIAL",
         hora: '22:00'
        },
        {
         programa: "AL FILO DE LA REALIDAD",
         hora: '23:00'
        }
 
      ]
    }
 
  ];

  programacionvi = [
    {
      dia: "VIERNES",
      childres: [
        {
          programa: "ÚLTIMA HORA",
          hora: '07:00'
        },
        {
         programa: "LOS COMENTARISTAS",
         hora: '08:00'
        },
        {
         programa: "ESPECIAL",
         hora: '09:30'
        },
        {
         programa: "ESPECIAL",
         hora: '10:00'
        },
        {
         programa: "ESPECIAL",
         hora: '11:00'
        },
        {
         programa: "VIATL FITNESS",
         hora: '11:30'
        },
        {
         programa: "FASHION PLANET",
         hora: '12:00'
        },
        {
         programa: "DEPORTES AL INSTANTE",
         hora: '12:30'
        },
        {
         programa: "FUUL FARANDULA",
         hora: '12:45'
        },
        {
         programa: "AZUL ELECTRICO",
         hora: '13:30'
        },
        {
         programa: "MICROINFORMATIVO",
         hora: '14:00'
        },
        {
         programa: "RECTA FINAL",
         hora: '14:30'
        },
        {
         programa: "ESPECIAL",
         hora: '15:00'
        },
        {
         programa: "DEPORVITO",
         hora: '15:30'
        },
        {
         programa: "HINCHA AMARILLO",
         hora: '16:00'
        },
        {
         programa: "ULTIMA HORA",
         hora: '17:00'
        },
        {
         programa: "TU VOZ",
         hora: '18:00'
        },
        {
         programa: "IDOLO TV",
         hora: '19:00'
        },
        {
         programa: "SHOW DEL KARTING",
         hora: '20:00'
        },
        {
         programa: "CONTRA GOLPE",
         hora: '20:30'
        },
        {
         programa: "FUULL NIGHT",
         hora: '21:00'
        },
        {
         programa: "SINFONIA DE MOTORES",
         hora: '22:00'
        },
        {
         programa: "FAHSION PLANET",
         hora: '23:00'
        }
 
      ]
    }
 
  ];

  programacionsa = [
    {
      dia: "SABADO",
      childres: [
        {
         programa: "MISA",
         hora: '10:00 - 10:30'
        },
        {
         programa: "ESPECIAL NOTICIAS",
         hora: '11:00 - 11:38'
        },
        {
         programa: "ESPECIAL NEGOCIOS",
         hora: '11:38 - 12:03'
        },
        {
         programa: "ESPECIAL TECNOLOGÍA",
         hora: '12:03 -12:20'
        },
        {
         programa: "CAPSULA VIAJES",
         hora: '12:20 - 12:27'
        },
        {
         programa: "ENTRETENIMIENTO",
         hora: '12:27 - 13:00'
        },
        {
         programa: "MEMORIAS DEL HINCHA AZUL",
         hora: '13:30 - 14:00'
        },
        {
         programa: "ANGELO PRESENTA",
         hora: '14:00 - 15:00'
        },
        {
         programa: "BISTANTI",
         hora: '15:00 - 15:34'
        },
        {
         programa: "TENDENCIAS",
         hora: '15:34 - 16:00'
        },
        {
         programa: "MEMORIAS HINCHA AMARILLO",
         hora: '16:00 - 17:00'
        },
        {
         programa: "COOFFEE BUSINESS",
         hora: '17:00'
        },
        {
         programa: "SINFONÍA DE MOTORES",
         hora: '18:00'
        }
 
      ]
    }
 
  ];
   aux=[];
   ruta="lunes";
   buscar="";
   res=[];
   busqueda= false;
  constructor() {
    this.aux.push(...this.programacionl);
    this.aux.push(...this.programacionm);
    this.aux.push(...this.programacionmi);
    this.aux.push(...this.programacionju);
    this.aux.push(...this.programacionvi);
    this.aux.push(...this.programacionsa);
    
    console.log("este es el objeto", this.aux);
   }
  
  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.ruta = ev.detail.value;
   
    
    
  }

  

}
