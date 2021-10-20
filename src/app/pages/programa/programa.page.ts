import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-programa',
  templateUrl: './programa.page.html',
  styleUrls: ['./programa.page.scss'],
})
export class ProgramaPage implements OnInit {
  public publ_prog: any=[];
  public prog_principal;
  habilitado=true;
  ruta;
  constructor( private publicacion: PublicacionService,
              private domSanatize: DomSanitizer,
              private router: ActivatedRoute,
              private rout: Router,
            ) { 
                this.publ_prog = [];
                this.ruta = this.router.snapshot.paramMap.get('id');
                console.log(this.ruta);
  }

  ngOnInit() {
    this.ruta = this.router.snapshot.paramMap.get('id');
    this.publ_prog = [];
    this.primero();
  }
  
  detalle(aux?, auxdos?,auxtres?,auxcuato?){
    console.log(aux, auxdos,auxtres);
    this.rout.navigate(['video-detalle', aux,auxdos,auxtres,this.ruta]);
  }

  primero( pull: boolean = false ){
    this.publicacion.getPrograma(this.ruta,true)
    .subscribe( resp => {
       console.log(resp['publicacion']);
       this.publ_prog.push( ...resp['publicacion']);
       this.prog_principal = this.publ_prog[0].LINK_YOUTUBE ;
       //this.publ_prog.splice(0,1);
       console.log( this.publ_prog);   
    });
  }

  siguientes( event?, pull: boolean = false ){
   

    this.publicacion.getPrograma(this.ruta,pull)
    .subscribe( resp => {
       console.log(resp['publicacion']);
       this.publ_prog.push( ...resp['publicacion']);
       this.prog_principal = this.publ_prog[0].LINK_YOUTUBE ;
       //this.publ_prog.splice(0,1);
       console.log( this.publ_prog);
       if(event){
         event.target.complete(); 
         if(resp['publicacion'].length == 0){
           this.habilitado = false;

         }
       }
      
    });
  }

  recargar( event ){
     this.siguientes( event, true );
     this.publ_prog = [];
    this.habilitado= true;
  }
  ionViewWillEnter(){
    this.ruta = this.router.snapshot.paramMap.get('id');
   
  }

}
