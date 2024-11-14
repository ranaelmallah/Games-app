import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
   private searchTextSubject=new BehaviorSubject<string>('');
    searchText=this.searchTextSubject.asObservable();
   updateSearchText(searchText:string){
    this.searchTextSubject.next(searchText)
   }

}
