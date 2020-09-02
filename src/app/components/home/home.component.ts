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

  constructor( private _spotifyService: SpotifyService ) { 
    this._spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      console.log( data.albums.items );     
      this.nuevasCanciones = data.albums.items; 
    } );
   }

  

}
