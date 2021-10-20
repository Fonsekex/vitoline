import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeFijoService } from 'src/app/services/home-fijo.service';
import { StreamingService } from 'src/app/services/streaming.service';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public url_streaming;
  public seis_fijo;
  public seis_ordenado = [];
  public siete_categoria=[];
  public entevistas=[];
  public entevistas_slide=[];
  public catg_principal;
  public sele_catg = "Economía";
  public bord = "5px solid";
  public bord_color = "#E81E25"
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
  


  public array_ordenado: {
    LINK_YOUTUBE: string,
    TITULO: string,
    CATEGORIA: string,
    ID_PUBLICACION: string,
    ID_PROGRAMA: string,
  };
  slideOpts = {
    slidesPerView: 1.7,
  };
  
  public widthimage= "50% !important";
  
  public fijo_uno;
  public fijo_dos;
  public fijo_tres;
  public fijo_cuatro;
  public fijo_cinco;
  public fijo_seis;


  public publ_categorias;

  divColor: string;
  divWidth: any;
  constructor(private streaming: StreamingService, 
              private domSanatize: DomSanitizer,
              private home_fijo: HomeFijoService,
              private publicacion: PublicacionService,
              private router: Router
              ) { 
                this.obtener_fijos();
                this.obtener_categorias(2);
                this.obtener_streaming();
                this.obtener_entrevistas();
                this.divColor = 'rgb(34, 34, 34)';
                this.divWidth = '20%';
                this.public_pag();

                
  }

  async ngOnInit() {
   
  }
  
  public_pag(){
    this.publicacion.getPrograma(1)
    .subscribe( resp => {
       console.log(resp['publicacion']);
      
    });
  }
  obtener_streaming(){
    this.streaming.getStreaming()
    .subscribe( resp => {
       console.log(resp['streaming'][0].LINK_YOUTUBE);
       this.url_streaming = resp['streaming'][0].LINK_YOUTUBE;
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  obtener_fijos(){
    return new Promise(resolve =>{
      this.home_fijo.getFijos()
      .subscribe( resp => {
        this.seis_fijo = resp['fijos'];
        console.log(this.seis_fijo);
        this.ordenar_fijos();
       resolve(true);
      });
    });
    
  }

  ordenar_fijos(){
    var uno= false;
    var dos = false;
    var tres = false;
    var cuatro = false;
    var cinco = false;
    var seis = false;
    
    for (let i = 0; i < this.seis_fijo.length; i++) { 
      switch(this.seis_fijo[i].fijo){
        case "VIDEO1":
          if(uno==false){
            this.array_ordenado = {
              TITULO: this.seis_fijo[i].TITULO,
              LINK_YOUTUBE:  this.seis_fijo[i].LINK_YOUTUBE,
              CATEGORIA:  this.seis_fijo[i].DESCRIPCION,
              ID_PUBLICACION: this.seis_fijo[i].ID_PUBLICACION,
              ID_PROGRAMA:  this.seis_fijo[i].ID_PROGRAMA
            } 
             
            this.seis_ordenado.push(this.array_ordenado);
            this.fijo_uno = this.seis_fijo[i].LINK_YOUTUBE;
            uno=true;
          }
        break;
        case "VIDEO2":
          if(dos==false){
            this.array_ordenado = {
              TITULO: this.seis_fijo[i].TITULO,
              LINK_YOUTUBE:  this.seis_fijo[i].LINK_YOUTUBE,
              CATEGORIA:  this.seis_fijo[i].DESCRIPCION,
              ID_PUBLICACION: this.seis_fijo[i].ID_PUBLICACION,
              ID_PROGRAMA:  this.seis_fijo[i].ID_PROGRAMA
            } 
             
            this.seis_ordenado.push(this.array_ordenado);
            this.fijo_dos= this.seis_fijo[i].LINK_YOUTUBE;
            dos=true;
          }
        break;
        case "VIDEO3":
          if(tres==false){
            this.array_ordenado = {
              TITULO: this.seis_fijo[i].TITULO,
              LINK_YOUTUBE:  this.seis_fijo[i].LINK_YOUTUBE,
              CATEGORIA:  this.seis_fijo[i].DESCRIPCION,
              ID_PUBLICACION: this.seis_fijo[i].ID_PUBLICACION,
              ID_PROGRAMA:  this.seis_fijo[i].ID_PROGRAMA
            } 
             
            this.seis_ordenado.push(this.array_ordenado);
            this.fijo_tres = this.seis_fijo[i].LINK_YOUTUBE;
            tres=true;
          }
        break;
        case "VIDEO4":
          if(cuatro==false){
            this.array_ordenado = {
              TITULO: this.seis_fijo[i].TITULO,
              LINK_YOUTUBE:  this.seis_fijo[i].LINK_YOUTUBE,
              CATEGORIA:  this.seis_fijo[i].DESCRIPCION,
              ID_PUBLICACION: this.seis_fijo[i].ID_PUBLICACION,
              ID_PROGRAMA:  this.seis_fijo[i].ID_PROGRAMA
            } 
             
            this.seis_ordenado.push(this.array_ordenado);
            this.fijo_cuatro = this.seis_fijo[i].LINK_YOUTUBE;
            cuatro=true;
          }
        break;
        case "VIDEO5":
          if(cinco==false){
            this.array_ordenado = {
              TITULO: this.seis_fijo[i].TITULO,
              LINK_YOUTUBE:  this.seis_fijo[i].LINK_YOUTUBE,
              CATEGORIA:  this.seis_fijo[i].DESCRIPCION,
              ID_PUBLICACION: this.seis_fijo[i].ID_PUBLICACION,
              ID_PROGRAMA:  this.seis_fijo[i].ID_PROGRAMA
            } 
             
            this.seis_ordenado.push(this.array_ordenado);
            this.fijo_cinco = this.seis_fijo[i].LINK_YOUTUBE;
            cinco=true;
          }
        break;
        case "VIDEO6":
          if(seis==false){
            this.array_ordenado = {
              TITULO: this.seis_fijo[i].TITULO,
              LINK_YOUTUBE:  this.seis_fijo[i].LINK_YOUTUBE,
              CATEGORIA:  this.seis_fijo[i].DESCRIPCION,
              ID_PUBLICACION: this.seis_fijo[i].ID_PUBLICACION,
              ID_PROGRAMA:  this.seis_fijo[i].ID_PROGRAMA
            } 
             
            this.seis_ordenado.push(this.array_ordenado);
            this.fijo_seis = this.seis_fijo[i].LINK_YOUTUBE;
            seis=true;
          }
        break;           

      }
      
    }
    console.log("AQUI TENEMOS YA TODOS");
    
    console.log(this.array_ordenado);
    console.log("AQUI TENEMOS YA TODOS LOS ORDENADOS");
    console.log(this.seis_ordenado);
    console.log(this.seis_ordenado[2].LINK_YOUTUBE);
    console.log(this.seis_ordenado[3].LINK_YOUTUBE);
    console.log(this.seis_ordenado[4].LINK_YOUTUBE);
    console.log(this.seis_ordenado[5].LINK_YOUTUBE);
  }

  seleccionarimage(catg){
    console.log("esroy dando clicl", catg);

    this.widthimage = "60% !important";
    switch(catg){
      case 1:
        this.sele_catg="Deportes"
        break;
      case 2: 
        this.sele_catg="Economía"
        break;
      case 3: 
        this.sele_catg="Tecnología"
        break;
      case 4: 
        this.sele_catg="Entretenimiento"
        break;

    }
    this.obtener_categorias(catg);

  }
  
  aumentarimagen(){
    this.divWidth = '60%';
  }

  obtener_categorias(categoria){
    return new Promise(resolve =>{
      this.publicacion.getCategoria(categoria)
      .subscribe( resp => {
        
        this.publ_categorias = resp['publicaciones'];
        this.catg_principal = this.publ_categorias[0].LINK_YOUTUBE ;
        this.publ_categorias.splice(0,1);
        console.log( this.publ_categorias);
       resolve(true);
      });
    });
    
  }


  obtener_entrevistas(){
    return new Promise(resolve =>{
      this.publicacion.getEntrevistas()
      .subscribe( resp => {
        
        this.entevistas = resp['entrevistas'];
        //this.entevistas_slide.push(this.entevistas[0]);
        //this.entevistas_slide.push(this.entevistas[1]);
        //this.entevistas.splice(0,2);
        console.log("ENTREVISTAS", this.entevistas);
       resolve(true);
      });
    });
    
  }

  detalle(aux?, auxdos?,auxtres?,auxcuato?){
    console.log(aux, auxdos,auxtres);
    this.router.navigate(['video-detalle', aux,auxdos,auxtres,auxcuato]);
  }

  styleObjectEconomia(): Object {
    if (this.sele_catg =="Economía" ){
        return {'border': '5px solid','border-color': "#E81E25"}
    }
    return {}
  }
  styleObjectDeporte(): Object {
    if (this.sele_catg =="Deportes" ){
        return {'border': '5px solid','border-color': "#E81E25"}
    }
    return {}
  }
  styleObjectTecnologia(): Object {
    if (this.sele_catg =="Tecnología" ){
        return {'border': '5px solid','border-color': "#E81E25"}
    }
    return {}
  }
  styleObjectEntretenimiento(): Object {
    if (this.sele_catg =="Entretenimiento" ){
        return {'border': '5px solid','border-color': "#E81E25"}
    }
    return {}
  }


}
