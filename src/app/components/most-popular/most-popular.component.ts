import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../service/games/games.service';
@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css'
})
export class MostPopularComponent implements OnInit {

  constructor( private _GamesService:GamesService){}
  ngOnInit(): void {
this.getMostPopular()
  }
  mostPopular:any={}
  getMostPopular(){
    this._GamesService.mostPopular().subscribe((data:any)=>{
console.log(data)
this.mostPopular=data.results
    })
  }
}
