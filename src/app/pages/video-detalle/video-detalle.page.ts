import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-video-detalle',
  templateUrl: './video-detalle.page.html',
  styleUrls: ['./video-detalle.page.scss'],
})
export class VideoDetallePage implements OnInit {
  public publ_prog=[];
  public sugeridos=[];
  auxii=[];
  public lista_favoritos_storage=[];
  
  public listafav;
  public uid = [];
  public favoritos=[];
  
  
  favorit=false;
  
 
  ruta;
  rutados;
  padre;
  num;
  constructor( private publicacion: PublicacionService,
    private router: ActivatedRoute, private route: Router,
    private storage: Storage) {
      this.ruta = this.router.snapshot.paramMap.get('id');
      this.rutados = this.router.snapshot.paramMap.get('iddos');
      this.padre = this.router.snapshot.paramMap.get('padre');
      this.num = this.router.snapshot.paramMap.get('num');
      
      console.log("el id", this.ruta);
      //this.detalles(this.ruta);
      this.top10(this.rutados);
    }

  async ngOnInit() {
    this.ruta = this.router.snapshot.paramMap.get('id');
    this.rutados = this.router.snapshot.paramMap.get('iddos');
    this.padre = this.router.snapshot.paramMap.get('padre');
    this.listafav = await this.storage.get('favorito');
    let uid = "";
    if(this.padre == 'favoritos'){
      this.favorit = true;
    }
    this.uid = JSON.parse(this.listafav);
    console.log("la lista de favoritos uid", this.uid);
    console.log("la lista de favoritos lista", this.listafav);
    this.detalles(this.ruta);
    this.top10(this.rutados);
  }
  
  
  ir(aux?, auxdos?,auxtres?,auxcuato?){
    console.log(aux);
    this.route.navigate(['video-detalle', aux,auxdos,auxtres,auxcuato]);
    
  }
 
  detalles(id){
    this.publ_prog=[];
    this.publicacion.buscar_pub(id)
    .subscribe(resp=>{
     
     this.publ_prog.push(...resp['publicacion']);
     
      console.log(this.publ_prog[0].LINK_YOUTUBE);
    })
  }
  top10(id){
    this.sugeridos=[];
    this.publicacion.buscar_top10(id)
    .subscribe(resp=>{
      this.sugeridos = resp['publicacion'];   
     
    })
  }
  
  atras(){
   let  au="programa";
  
   const  audos=2;
   console.log('padre',this.padre,"numero",this.num);
   if(this.padre == 'video-detalle'){
     this.route.navigate(['home']);
   }else{
    if(this.num ==0){
      this.route.navigate([this.padre]);
    }else{
      this.route.navigate([this.padre,this.num]);
    }
   }
    
  }
  
  favorito(){
    this.favorit=true;
    //this.auxii.push(this.listafav);
    console.log("el uid 0", this.uid);
    if(this.uid == null){
      //this.auxii.push(this.uid);
    }else{
      this.auxii.push(...this.uid);
    }
    console.log("la lista de facortios es:", this.auxii);
    this.auxii.push(...this.publ_prog);
    console.log("la lista de facortios es:", this.auxii);
    this.storage.set("favorito", JSON.stringify(this.auxii));
    localStorage.setItem('favorito', JSON.stringify(this.auxii));
    console.log("la lista de favoritos",this.auxii);
  }
  unfavorito(){
    this.favorit=false;
    console.log("la ruta", this.ruta);
    console.log("el array", this.auxii);
    if(this.auxii.length != 0){
      var au = this.auxii.findIndex(x=>x.ID_PUBLICACION == this.ruta)
      console.log("lo enconetre", au);
      this.auxii.splice(au,1);
      console.log(this.auxii);  
      this.storage.set("favorito", JSON.stringify(this.auxii));
      localStorage.setItem('favorito', JSON.stringify(this.auxii));
      console.log("la lista de favoritos",this.auxii);
    }else{
      var au = this.uid.findIndex(x=>x.ID_PUBLICACION == this.ruta)
      console.log("lo enconetre", au);
      this.uid.splice(au,1);
      console.log(this.uid);
      this.storage.set("favorito", JSON.stringify(this.uid));
      localStorage.setItem('favorito', JSON.stringify(this.uid));
      console.log("la lista de favoritos",this.uid);
   
    }
   
    
  }

}
