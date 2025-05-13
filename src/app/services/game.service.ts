import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _apiURL = 'https://www.cheapshark.com/api/1.0/';

  constructor(private http:HttpClient) { }

  searchGames(title:string): Observable<any>{
    return this.http.get('g${this.apiURL}games?title=${title}&limit=10');
  }

  getPopularGames(): Observable<any>{
    return this.http.get('https://www.cheapshark.com/api/1.0/deals?sortBy=dealRating&pageSize=12');
  }
}
