import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","",new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  publishQuote(){
    this.addQuote.emit(this.newQuote);
};

  resetForm(quoteForm: NgForm){
    quoteForm.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
