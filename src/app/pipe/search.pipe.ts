import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(games: any, searchText: string) {
    if (!games) return [];
    if (!searchText) return games;
    searchText=searchText.toLocaleLowerCase();
    return games.filter((game:any)=>{
      return game.name.toLocaleLowerCase().includes(searchText)
    })
  }

}
