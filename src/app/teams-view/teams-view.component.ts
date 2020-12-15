import { Component, OnInit } from '@angular/core';

import { FifaDataService } from '../fifa-data.service';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.scss']
})

export class TeamsViewComponent implements OnInit {

  public loading = false;
  public teams = [];

  constructor(fifaDataServices: FifaDataService,) {

    this.loading = true;

    fifaDataServices.getTeams().subscribe((data) => {
      this.loading = false;
      this.teams = data.Teams;
    });

  }

  ngOnInit(): void {
  }

}
