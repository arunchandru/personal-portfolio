import { Component, OnInit } from '@angular/core';
import { UserhelpService } from 'src/app/model/userhelp';

@Component({
  selector: 'app-userhelp',
  templateUrl: './userhelp.component.html',
  styleUrls: ['./userhelp.component.css']
})
export class UserhelpComponent implements OnInit {

  helpCenter:any;
  test:any="help";

  constructor( private userhelpService : UserhelpService) { }

  ngOnInit(): void {

    this.helpCenter = this.userhelpService.helpCenter;

  }

 

}
