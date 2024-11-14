import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { HighestRatedComponent } from './components/highest-rated/highest-rated.component';
import { UpcomingGamesComponent } from './components/upcoming-games/upcoming-games.component';
import { ReleasedLastMonthComponent } from './components/released-last-month/released-last-month.component';
import { MostPopularComponent } from './components/most-popular/most-popular.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:GamesComponent},
    {path:'games',component:GamesComponent},
    {path:'highestRated',component:HighestRatedComponent},
    {path:'upcomingGames',component:UpcomingGamesComponent},
    {path:'ReleasedLastMonth',component:ReleasedLastMonthComponent},
    {path:'MostPopular',component:MostPopularComponent},
    {path:'**',component:NotFoundComponent},

    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}