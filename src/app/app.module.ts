import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My custom components:
import { TeamComponent } from './team/team.component';
import { StadiumComponent } from './stadium/stadium.component';
import { StadiumsViewComponent } from './stadiums-view/stadiums-view.component';
import { TeamsViewComponent } from './teams-view/teams-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    StadiumComponent,
    StadiumsViewComponent,
    TeamsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Este módulo sirve para instanciar un cliente HTTP, 
    // que nos permite consumir servicios web
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }