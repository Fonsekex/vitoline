import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class HomeFijoService {

  constructor( private http: HttpClient) { }

  getFijos(){
    return this.http.get(`${ URL }/Home_Fijo/obtener_seis`)
   }
}
