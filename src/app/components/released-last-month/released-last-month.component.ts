import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';

@Component({
  selector: 'app-released-last-month',
  standalone: true,
  imports: [],
  templateUrl: './released-last-month.component.html',
  styleUrl: './released-last-month.component.css'
})
export class ReleasedLastMonthComponent implements OnInit {
constructor(private _GamesService:GamesService ){}
ngOnInit(): void {
  this.getRecentGames()
}
recentGAmes:any={}
getRecentGames(){
  this._GamesService.releasedLastMonth().subscribe((data:any)=>{
    console.log(data)
    this.recentGAmes=data.results

  })
}
}
