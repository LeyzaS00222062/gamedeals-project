import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameWishlistService } from '../../services/game-wishlist.service';
import { Game } from '../../models/game.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-wishlist',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './game-wishlist.component.html',
  styleUrls: ['./game-wishlist.component.css']
})
export class GameWishlistComponent implements OnInit {

  wishList: Game[]=[];

  constructor(private wishListService: GameWishlistService, private http: HttpClient){}

  ngOnInit(): void {
    this.refreshWishlist(); 
  }

  remove(gameID: string){
    this.wishListService.removeFromWishList(gameID).subscribe(() => {
      this.refreshWishlist();
    });
  }

  refreshWishlist(data: any = null){
    this.wishListService.getWishList().subscribe(data => {
      this.wishList = data;
    });
  }

}
