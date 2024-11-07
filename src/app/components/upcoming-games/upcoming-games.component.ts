import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';

@Component({
  selector: 'app-upcoming-games',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-games.component.html',
  styleUrl: './upcoming-games.component.css'
})
export class UpcomingGamesComponent implements OnInit {

  constructor( private _GamesService:GamesService){}
  ngOnInit(): void {
this.UpcomingGames()
  }
  upcomingGames:any={}
  UpcomingGames(){
    this._GamesService.upcomingGames().subscribe((data:any)=>{
console.log(data)
this.upcomingGames=data.results
    })
  }
}
