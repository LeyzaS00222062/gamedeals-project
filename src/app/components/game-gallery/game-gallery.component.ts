import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-gallery',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './game-gallery.component.html',
  styleUrls: ['./game-gallery.component.css']
})
export class GameGalleryComponent implements OnInit{

  popularGames: any[] = [];

  constructor(private gameService:GameService){}

  ngOnInit(): void {
    this.gameService.getPopularGames().subscribe(data =>{
      this.popularGames = data;
    });
  }

}
