import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from './models/currency';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'exchange_angular';
  allCurrency$: Observable<ICurrency[]>

  ngOnInit(): void {
  }

  constructor(public currentService: CurrencyService){
    this.allCurrency$ = this.currentService.getAll()
  }

}
