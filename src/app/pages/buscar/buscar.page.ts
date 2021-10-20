import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  public publ_prog: any=[];
  public prog_principal;
  constructor( 
    private domSanatizer: DomSanitizer,
    private publicacion: PublicacionService,
    private router: Router ) { }

  ngOnInit() {
  }
  aux;
  bandera=false;
  ionChange(event){
   this.aux = event.detail.value;
   console.log("esto busca", event.detail);
   this.publ_prog = [];
   this.prog_principal = [];
   if(this.aux != '' || this.aux != null || this.aux != undefined || this.aux != " "){
    this.publicacion.buscar(this.aux)
   .subscribe(resp => {
    this.publ_prog.push( ...resp['publicacion']);
    this.bandera = true;
    console.log("longitud", this.bandera)
    this.prog_principal = this.publ_prog[0].LINK_YOUTUBE ;
       
    console.log(this.publ_prog);
   },err=>{
     this.bandera=false;
     console.log("atrape el error");
   });
   }
   

  }

  detalle(aux?, auxdos?,auxtres?,auxcuato?){
    this.router.navigate(['video-detalle', aux,auxdos,auxtres,auxcuato]);
   
    
  }

}
