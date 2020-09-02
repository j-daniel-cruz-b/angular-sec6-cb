import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {
  // tslint:disable-next-line: no-trailing-whitespace
  
  // tslint:disable-next-line: variable-name
  constructor( private _domSanitizer: DomSanitizer ){

  }

  // tslint:disable-next-line: no-trailing-whitespace
  transform(value: string, url: string): SafeResourceUrl {    
    return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
