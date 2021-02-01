import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('When the outcome of a meeting is to have another meeting, it has been a lousy meeting.','Brian',"Herbert Clark",),
    new Quote('Wake in our breast the living fires, The holy faith that warmed our sires; Thy hand hath made our nation free; To die for her is serving Thee.','Thomas',"Oliver Wendell"),
    new Quote('In the frank expression of conflicting opinions lies the greatest promise of wisdom in governmental action.','Hesbon',"Louis Dembtiz"),
  ];

  addNewQuote(quote:Quote) {
    this.quotes.push(quote);
  }

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  clearQuote(d:boolean, index:number){
    if (d) {
      this.quotes.splice(index,1);
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
