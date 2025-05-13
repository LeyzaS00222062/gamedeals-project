import { Injectable } from '@angular/core';
import { Game } from '../models/game.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameWishlistService {
  private _wishlist: Game[] = [];
  private _apiUrl = 'https://localhost:3000/wishlist';

  constructor(private http:HttpClient){}

  getWishList(): Observable<Game[]>{
    return this.http.get<Game[]>(this._apiUrl);
  }

  addToWishList(game:Game): Observable<Game>{
    if(!this._wishlist.find(g => g.gameID === game.gameID)){
      this._wishlist.push(game);
    }
    return this.http.post<Game>(this._apiUrl, game);
  }

  removeFromWishList(gameID: string): Observable<void> {
    this._wishlist = this._wishlist.filter(game => game.gameID !== gameID);
    return this.http.delete<void>('${this._apiUrl}/${gameID}')
  }

}
