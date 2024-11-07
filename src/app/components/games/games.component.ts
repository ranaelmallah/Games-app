import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../service/games/games.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../../pipe/search.pipe";
@Component({
  selector: 'app-games',
  standalone: true,
  imports: [SearchPipe ,FormsModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent implements OnInit  {
  searchText: string = '';
showDetails:number|null=null
togellDetails(id:number){
  this.showDetails=this.showDetails===id ? null: id
}

constructor(private  _GamesService:GamesService){}
  ngOnInit(): void {
    this.getGames()
  }
games:any=[]
getGames(){
this._GamesService.getgames().subscribe((data:any)=>{
this.games=data.results
console.log(data)
})
}
}
