import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_forms_forms_q } from '@angular/forms';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('When the outcome of a meeting is to have another meeting, it has been a lousy meeting.','Brian',"Herbert Clark",new Date(2020,1,4)),
    new Quote('Wake in our breast the living fires, The holy faith that warmed our sires; Thy hand hath made our nation free; To die for her is serving Thee.','Thomas',"Oliver Wendell",new Date(2020,0,9)),
    new Quote('In the frank expression of conflicting opinions lies the greatest promise of wisdom in governmental action.','Hesbon',"Louis Dembtiz",new Date(2020,6,8)),
  ];

  addNewQuote(quote:Quote) {
    let today = new Date();
    quote.datePublished = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
      )
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
  
  upVote(index:number) {
      this.quotes[index].votes += 1;
  }

  downVote(index:number) {
    this.quotes[index].votes -= 1;
}

  constructor() { }

  ngOnInit(): void {
  }

}
