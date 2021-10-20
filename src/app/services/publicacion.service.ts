import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  pagina: number = 0;

  constructor(private http: HttpClient) { }


  getCategoria(categoria){
    console.log("QUE PASOOOO", categoria)
    return this.http.get(`${ URL }/publicacion/obtener_publicaciones_categoria_seis/${categoria}`);
  }

  getEntrevistas(){
    return this.http.get(`${ URL }/publicacion/obtener_entrevistas`);
  }
  
  getPrograma( programa, pull: boolean = false){
    if(pull){
      this.pagina = 0;
    }
    let res = this.http.get(`${ URL }/publicacion/por_programa/${programa}/${this.pagina}`);
    if( res['error'] == true   ){

    }else{
      this.pagina +=1;
    }
     return res
  }

  getCategoriaP( categoria, pull: boolean = false){
    if(pull){
      this.pagina = 0;
    }
    let res = this.http.get(`${ URL }/publicacion/por_categoria_paginado/${categoria}/${this.pagina}`);
    if( res['error'] == true   ){

    }else{
      this.pagina +=1;
    }
     return res
  }

  buscar( termino){
   
    return this.http.get(`${ URL }/publicacion/buscar/${termino}`);
    
  }
  buscar_pub( id){
   
    return this.http.get(`${ URL }/publicacion/buscar_pub/${id}`);
    
  }
  buscar_top10( id){
   
    return this.http.get(`${ URL }/publicacion/buscar_top10/${id}`);
    
  }

}
