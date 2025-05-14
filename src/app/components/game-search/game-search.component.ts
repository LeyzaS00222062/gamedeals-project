import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';
import { GameWishlistService } from '../../services/game-wishlist.service';
import { Game } from '../../models/game.models';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-game-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent {
  query = '';
  
  games: any[]=[];

  constructor(
    private gameService: GameService,
    private wishListService: GameWishlistService
  ){}

  search(){
    if (!this.query) return;
    this.gameService.searchGames(this.query).subscribe(data => {
      this.games = data;
    });
  }

  addToWishList(game: Game){
    this.wishListService.addToWishList(game);
  }

}
