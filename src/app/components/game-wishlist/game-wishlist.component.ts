import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameWishlistService } from '../../services/game-wishlist.service';
import { Game } from '../../models/game.models';

@Component({
  selector: 'app-game-wishlist',
  imports:[CommonModule],
  templateUrl: './game-wishlist.component.html',
  styleUrl: './game-wishlist.component.css'
})
export class GameWishlistComponent implements OnInit {

  wishList: Game[]=[];

  constructor(private wishListService: GameWishlistService){}

  ngOnInit(): void {
    this.wishList = this.wishListService.getWishList();
  }

  remove(gameID: string){
    this.wishListService.removeFromWishList(gameID);
    this.wishList = this.wishListService.getWishList();
  }

}
