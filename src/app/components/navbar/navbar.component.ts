import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModule ,NgbOffcanvas  } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchService } from '../../service/search/search.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class NavbarComponent {
  saerchText=''
  constructor(private SearchService:SearchService){}
 onSaerchChange(event:Event){
const value=(event.target as HTMLInputElement ).value;
this.SearchService.updateSearchText(value)
 }

}
