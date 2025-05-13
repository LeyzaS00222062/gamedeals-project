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
    this.refreshWishlist;
  }

  remove(gameID: string){
    this.wishListService.removeFromWishList(gameID).subscribe(() => {
      this.refreshWishlist();
    });
  }

  refreshWishlist(){
    this.wishListService.getWishList().subscribe(data => {
      this.wishList = data;
    });
  }

}
