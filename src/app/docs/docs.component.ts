import { Component, OnInit } from '@angular/core';
import { Docs } from 'src/app/model/docs';


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css'],
  providers:[Docs],

})
export class DocsComponent implements OnInit {

  documents:any;

  constructor( private docs:Docs) { }

  ngOnInit(): void {
    this.documents = this.docs.docsdetails;
  }

}
