import { Component, Input, OnInit } from '@angular/core';

import { GamesService } from '../../service/games/games.service';
import { SearchPipe } from "../../pipe/search.pipe";
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search/search.service';
@Component({
  selector: 'app-most-popular',
  standalone: true,
  imports: [SearchPipe],
  templateUrl: './most-popular.component.html',
  styleUrl: './most-popular.component.css'
})
export class MostPopularComponent implements OnInit {
 searchText=''
  constructor( private _GamesService:GamesService ,private  searchService: SearchService){}
  ngOnInit(): void {
this.getMostPopular()
this.search()
  }
  search(){
   this.searchService.searchText.subscribe(text=> this.searchText=text)
  }
  mostPopular:any={}
  getMostPopular(){
    this._GamesService.mostPopular().subscribe((data:any)=>{
console.log(data)
this.mostPopular=data.results
    })
  }
}
