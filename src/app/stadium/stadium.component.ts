import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {

  @Input() public stadium: any;




  constructor() { }

  ngOnInit(): void {
  }

}
