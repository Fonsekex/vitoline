import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  public publ_prog: any=[];
  public prog_principal;
  habilitado=true;
  ruta;

  constructor(private publicacion: PublicacionService,
    private domSanatize: DomSanitizer,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.ruta = this.router.snapshot.paramMap.get('id');
    this.publ_prog = [];
    this.primero();
  }
  primero( pull: boolean = false ){
    this.publicacion.getCategoriaP(this.ruta,true)
    .subscribe( resp => {
       console.log(resp['publicacion']);
       this.publ_prog.push( ...resp['publicacion']);
       this.prog_principal = this.publ_prog[0].LINK_YOUTUBE ;
       //this.publ_prog.splice(0,1);
       console.log( this.publ_prog);   
    });
  }
  detalle(aux?, auxdos?,auxtres?,auxcuato?){
    console.log(aux, auxdos,auxtres);
    this.route.navigate(['video-detalle', aux,auxdos,auxtres,this.ruta]);
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
    this.publ_prog = [];
    this.ruta = ev.detail.value;
    this.primero(); 
    
  }
  siguientes( event?, pull: boolean = false ){
    this.publicacion.getCategoriaP(this.ruta,pull)
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

}
