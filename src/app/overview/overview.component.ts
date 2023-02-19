import { Component, OnInit } from '@angular/core';
import { Overview } from 'src/app/model/overview';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers:[Overview]
})
export class OverviewComponent implements OnInit {

    cardData:any;

  constructor( private dataservice : Overview ) { }

  ngOnInit(): void {
    this.cardData = this.dataservice.card ;
  }

}
