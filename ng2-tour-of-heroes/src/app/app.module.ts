import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from "@angular/http";

// Imports for loading & configuring the Angular in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';
import { HeroService }          from './Services/hero.service';

import { AppRoutingModule }     from './Modules/app-routing.module';

import { AppComponent }         from './Components/app.component';
import { DashboardComponent }   from './Components/dashboard.component';
import { HeroDetailComponent }  from './Components/hero-detail.component';
import { HeroesComponent }      from './Components/heroes.component';
import { HeroSearchComponent }  from "./Components/hero-search.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
