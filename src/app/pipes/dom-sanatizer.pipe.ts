import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanatizer'
})
export class DomSanatizerPipe implements PipeTransform {
  
  constructor( private domSanatizer: DomSanitizer ){}
  transform( video: string): any {
    const domVideo = video;
    return this.domSanatizer.bypassSecurityTrustResourceUrl( domVideo );
  }

}
