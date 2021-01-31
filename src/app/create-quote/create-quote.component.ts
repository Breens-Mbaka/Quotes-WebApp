import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  @Output() publishQuote = new EventEmitter<Quote>();

  createQuotes = new Quote("","","")

  publish(){
    this.publishQuote.emit(this.createQuotes);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
