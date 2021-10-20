import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  public listafav;
  public uid = [];
  constructor(private storage: Storage, private router: Router) { 
   // this.obtenerfavoritos();
  }

  ngOnInit() {
    this.obtenerfavoritos();
   
  }
  async obtenerfavoritos(){
    this.listafav = await  this.storage.get('favorito');
    this.uid = JSON.parse(this.listafav);
    console.log("listar favoritors", this.uid)
  }
  detalle(aux?, auxdos?,auxtres?,auxcuatro?){
    console.log(aux);
    this.router.navigate(['video-detalle', aux,auxdos,auxtres,auxcuatro]);
    
  }
  ionViewWillLeave() {
   console.log("deje la pagina");
  }
  ionViewWillEnter(){
    console.log("entre a la pagina");
    this.obtenerfavoritos();
   
  }
  eliminar(item){
    var au = this.uid.findIndex(x=>x.ID_PUBLICACION == item.ID_PUBLICACION)
    console.log("lo enconetre", au);
    this.uid.splice(au,1);
    console.log(this.uid);
    console.log(this.uid);
      this.storage.set("favorito", JSON.stringify(this.uid));
      localStorage.setItem('favorito', JSON.stringify(this.uid));
      console.log("la lista de favoritos",this.uid);
   
  
     

  }

}
