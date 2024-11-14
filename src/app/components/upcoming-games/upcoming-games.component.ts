import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';
import { SearchPipe } from "../../pipe/search.pipe";
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search/search.service';

@Component({
  selector: 'app-upcoming-games',
  standalone: true,
  imports: [SearchPipe],
  templateUrl: './upcoming-games.component.html',
  styleUrl: './upcoming-games.component.css'
})
export class UpcomingGamesComponent implements OnInit {
 searchText=''
  constructor( private _GamesService:GamesService,private  searchService: SearchService){}
  ngOnInit(): void {
this.UpcomingGames()
this.search()
  }
  search(){
    this.searchService.searchText.subscribe(text=> this.searchText=text)
  }
  upcomingGames:any={}
  UpcomingGames(){
    this._GamesService.upcomingGames().subscribe((data:any)=>{
console.log(data)
this.upcomingGames=data.results
    })
  }
}
