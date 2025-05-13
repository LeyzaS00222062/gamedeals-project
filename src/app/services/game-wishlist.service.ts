import { Injectable } from '@angular/core';
import { Game } from '../models/game.models';

@Injectable({
  providedIn: 'root'
})
export class GameWishlistService {
  private _wishlist: Game[] = [];

  getWishList(): Game[]{
    return this._wishlist;
  }

  addToWishList(game:Game){
    if(!this._wishlist.find(g => g.gameID === game.gameID)){
      this._wishlist.push(game);
    }
  }

  removeFromWishList(gameID: string){
    this._wishlist = this._wishlist.filter(game => game.gameID !== gameID);
  }

}
