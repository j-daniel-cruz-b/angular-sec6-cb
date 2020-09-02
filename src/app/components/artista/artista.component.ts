import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];
  constructor( private _activatedRoute: ActivatedRoute,
              private spotify: SpotifyService ) { 
    this.loading = true;
                this._activatedRoute.params.subscribe( args => {
      this.getArtista( args['id'] );
      this.getTopTracks( args['id'] );
      
    } );
   }
  
   getArtista( id: string){
      this.spotify.getArtista( id ).subscribe( artista => {
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      } )
   }

   getTopTracks( id: string ){
      this.spotify.getTopTracks(id).subscribe( tracks => {
        this.topTracks = tracks;
        console.log(tracks);
        
      } )
   }
  

}
