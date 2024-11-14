import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';
import { ActivatedRoute } from '@angular/router';
import { SearchPipe } from "../../pipe/search.pipe";
import { SearchService } from '../../service/search/search.service';

@Component({
  selector: 'app-highest-rated',
  standalone: true,
  imports: [SearchPipe],
  templateUrl: './highest-rated.component.html',
  styleUrl: './highest-rated.component.css'
})
export class HighestRatedComponent implements OnInit {

searchText = '';

  constructor( private _GamesService:GamesService ,private  searchService: SearchService){}
  ngOnInit(): void {
this.getHighestRated()
this.search()
  }
  search(){
    this.searchService.searchText.subscribe(text=> this.searchText=text)
  }
  HighestRated:any={}
  getHighestRated(){
    this._GamesService.highestRated().subscribe((data:any)=>{
console.log(data)
this.HighestRated=data.results
    })
  }
}
