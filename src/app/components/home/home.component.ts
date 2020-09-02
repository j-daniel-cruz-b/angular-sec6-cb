import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  loading: boolean;
  accion = 1;
  error = false;
  mesageError: string;

  constructor( private _spotifyService: SpotifyService ) { 
    this.loading = true;

    this._spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      console.log( data );
      this.nuevasCanciones = data;
      this.loading = false;
    }, (_error) => {
      this.error = true;
      console.log(_error);
      this.mesageError = _error.error.message;
    } );
   }

  

}
