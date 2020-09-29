import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient) {


   

   }

   getTrindMovies():Observable<any>
   {
     return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=26c01b5c0a7b093d9a3febc5025f7a79')

   }
   getTrindTv():Observable<any>
   {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=26c01b5c0a7b093d9a3febc5025f7a79')

   }

   getItemDetails(media_type , id):Observable<any>
   {
     return this._HttpClient.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
   }
  

}
