import { Component, OnInit } from '@angular/core';

// Services:
import { FifaDataService } from '../fifa-data.service';

@Component({
  selector: 'app-stadiums-view',
  templateUrl: './stadiums-view.component.html',
  styleUrls: ['./stadiums-view.component.scss']
})
export class StadiumsViewComponent implements OnInit {

  public loading = false;
  public teams = [];
  public stadiums = [];

  constructor(fifaDataServices: FifaDataService,) {

    this.loading = true;


    fifaDataServices.getStadiums().subscribe((data) => {
      this.loading = false;
      this.stadiums = data.stadiums;
    });
  }
  ngOnInit(): void {
  }

}
