import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
// RxJS extentions
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}
  // Returns Observable (events flow)
  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`) // Web API query URL
      .map(response => response.json().data as Hero[]);
  }
}
