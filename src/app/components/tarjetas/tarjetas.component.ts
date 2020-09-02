import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  @Input() items: any[] = [];
  @Input() accion: number;
  constructor( private _router: Router ) { } 
  
  verArtistas( item: any ){
    
    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this._router.navigate(['/artist', artistaId]);
    
    
  }
    
}
