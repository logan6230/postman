import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadiumsViewComponent } from './stadiums-view/stadiums-view.component';
import { TeamsViewComponent } from './teams-view/teams-view.component';

const routes: Routes = [

  { path: 'teams', component: TeamsViewComponent },
  { path: 'stadiums', component: StadiumsViewComponent },

  { path: '', component: TeamsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
