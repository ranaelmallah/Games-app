import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GamesComponent } from "./components/games/games.component";
import { GamesService } from './service/games/games.service';
import { HttpClientModule } from '@angular/common/http';
import { ReleasedLastMonthComponent } from "./components/released-last-month/released-last-month.component";
import { MostPopularComponent } from "./components/most-popular/most-popular.component";
import { UpcomingGamesComponent } from "./components/upcoming-games/upcoming-games.component";
import { HighestRatedComponent } from "./components/highest-rated/highest-rated.component";
import { AsideComponent } from "./components/aside/aside.component";
import { SearchPipe } from './pipe/search.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, GamesComponent, HttpClientModule, ReleasedLastMonthComponent, MostPopularComponent, UpcomingGamesComponent, HighestRatedComponent, AsideComponent,SearchPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[GamesService]

})
export class AppComponent {
  title = 'Games-App';
  searchText=''
  constructor(private router: Router) {}

  onSearchTextChange(text: string) {
    this.searchText = text;
    this.router.navigate([], {
      queryParams: { search: this.searchText },
      queryParamsHandling: 'merge'  // Keeps any existing query params
    });
  }
}
