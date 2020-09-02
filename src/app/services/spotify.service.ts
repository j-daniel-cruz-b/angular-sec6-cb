import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  introToken = 'Bearer ';
  toekn = 'BQAugbPVxOQs3A3aJWlqedqjqjuHjYXV362Pw7WFQG8su_thV8rNr0ce-pzSLzCRPsjw8SMR9uqFv8jA5WQ';
  constructor( private http: HttpClient ) { 

   }

   getQuery( query: string ){
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': this.introToken + this.toekn
       });

       return this.http.get( url, { headers } );
   }

  getNewReleases(){
  
    return this.getQuery('browse/new-releases?limit=50 ')
              .pipe( map( data => data['albums'].items ) );
    // return this.http.get( 'https://api.spotify.com/v1/browse/new-releases?limit=50', {headers} )
    //             .pipe( map( data => data['albums'].items ) );

  }

  getArtistas( termino: string ){

    return this.getQuery( `search?q=${ termino }&type=artist&limit=30` )
              .pipe( map( data => data['artists'].items ) );
  }

  getArtista( id: string ){
    return this.getQuery( `artists/${id}` );
              // .pipe( map( data => data['artists'].items ) );
  }

  getTopTracks( id: string ){
    return this.getQuery( `artists/${id}/top-tracks?country=us` )
              .pipe( map( data => data['tracks'] ) );
  }
}
