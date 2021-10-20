import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class StreamingService {

  constructor( private http: HttpClient) { }
  
  getStreaming(){
   return this.http.get(`${ URL }/streaming/obtener_streaming`)
  }

}
