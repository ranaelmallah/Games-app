import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';

@Component({
  selector: 'app-highest-rated',
  standalone: true,
  imports: [],
  templateUrl: './highest-rated.component.html',
  styleUrl: './highest-rated.component.css'
})
export class HighestRatedComponent implements OnInit {

  constructor( private _GamesService:GamesService){}
  ngOnInit(): void {
this.getHighestRated()
  }
  HighestRated:any={}
  getHighestRated(){
    this._GamesService.highestRated().subscribe((data:any)=>{
console.log(data)
this.HighestRated=data.results
    })
  }
}
