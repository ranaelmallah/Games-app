import { Component, Input } from '@angular/core';
import { NgbModule ,NgbOffcanvas  } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  schemas: [NO_ERRORS_SCHEMA] 
})
export class NavbarComponent {
offcanvas: any;

  constructor(private offcanvasService: NgbOffcanvas) { }
  openOffcanvas(content:any){
this.offcanvasService.open(content,{ariaLabelledBy:'offcanvas-basic-title'})
  }
}
