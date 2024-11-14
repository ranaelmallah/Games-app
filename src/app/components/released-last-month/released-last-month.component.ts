import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';
import { SearchPipe } from "../../pipe/search.pipe";
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search/search.service';

@Component({
  selector: 'app-released-last-month',
  standalone: true,
  imports: [SearchPipe],
  templateUrl: './released-last-month.component.html',
  styleUrl: './released-last-month.component.css'
})
export class ReleasedLastMonthComponent implements OnInit {
   serchText=''
constructor(private _GamesService:GamesService ,private  searchService: SearchService){}
ngOnInit(): void {
  this.getRecentGames();
  this.search();
}
search(){
 this.searchService.searchText.subscribe(text => this.serchText=text)
}
recentGAmes:any={}
getRecentGames(){
  this._GamesService.releasedLastMonth().subscribe((data:any)=>{
    console.log(data)
    this.recentGAmes=data.results

  })
}
}
