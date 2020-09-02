import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { 

   }

  getNewReleases(){
  
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB4DpzDzAQSI0-RIiCqBnaTmWFEZ3ODjsK4UMQIeM-XtTmBXuEGaFbCA589wesqJfpc0-fyxvN5fFd3LUI'
     });
    return this.http.get( 'https://api.spotify.com/v1/browse/new-releases?limit=50', {headers} );    

  }
}
