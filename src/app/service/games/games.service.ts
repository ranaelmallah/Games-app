import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient :HttpClient ) { }
  APIKey ='c9bf0dd019714c6da4589ac408136265'
  getgames(){
    const APIKey ='c9bf0dd019714c6da4589ac408136265'
    return this._HttpClient.get(`https://api.rawg.io/api/platforms?key=${APIKey}`)
  }
  releasedLastMonth(){
    const APIKey ='c9bf0dd019714c6da4589ac408136265'
    return this._HttpClient.get(`https://api.rawg.io/api/games?dates=2019-09-01,2019-09-30&platforms=18,1,7&key=${APIKey}`)
  }
  
mostPopular(){
    const APIKey ='c9bf0dd019714c6da4589ac408136265'
    return this._HttpClient.get(`https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added&key=${APIKey}`)
  }
  upcomingGames(){
    const APIKey ='c9bf0dd019714c6da4589ac408136265'
    return this._HttpClient.get(`https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added&key=${APIKey}`)
  }
  highestRated(){
    const APIKey ='c9bf0dd019714c6da4589ac408136265'
    return this._HttpClient.get(`https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating&key=${APIKey}`)
  }
}

