import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[Accounts],
})
export class AccountComponent implements OnInit {

  profile:any;

  constructor( private account:Accounts) {}

  ngOnInit(): void {
    this.profile = this.account.accountdetails;
  }

}
