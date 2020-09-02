import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  
  artistas: any[] = [];
  loading: boolean;
  accion = 2;

  constructor( private _spotifyService: SpotifyService ) { 
    
   }

  buscar( termino: string ){
    console.log(termino);
    this.loading = true;
    this._spotifyService.getArtistas( termino )
    .subscribe( (data: any) => {
      console.log( data );
      this.artistas = data;
      this.loading = false;
    } )
  }

}
