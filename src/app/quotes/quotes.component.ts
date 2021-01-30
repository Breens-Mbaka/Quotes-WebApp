import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    new Quote("Ryan","Breens","Pain is temporary but pride is forever",new Date()),
    new Quote("Ryan","Breens","Pain is temporary but pride is forever",new Date()),
    new Quote("Ryan","Breens","Pain is temporary but pride is forever",new Date())
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
