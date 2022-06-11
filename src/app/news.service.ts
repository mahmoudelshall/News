import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( public _HttpClient:HttpClient) { }

GetEgyptNews():Observable<any>
{
  return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&apiKey=8352679d302846fe9a17d041d0f6bd90");
}

GetUsaNews():Observable<any>
{
  return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=8352679d302846fe9a17d041d0f6bd90");
}



}
