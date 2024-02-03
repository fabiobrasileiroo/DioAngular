import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']
})
export class EntryDataComponent implements OnInit {
  placeholder: string = 'email'
  placepass: string = "senha"
  mudarcolor: string = 'red'
  constructor() { }

  ngOnInit(): void {
  }

}
