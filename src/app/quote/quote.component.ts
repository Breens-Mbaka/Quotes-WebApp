import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote("breens","tom","Work hard"),
    new Quote("breens","tom","Work hard"),
    new Quote("breens","tom","Work hard"),
    new Quote("breens","tom","Work hard"),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
