import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import { rounded } from 'src/app/utils/functions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currency$: Observable<ICurrency[]>
  rounded = (num:number)=>rounded(num)

  constructor(private currentService: CurrencyService) {}

  ngOnInit(): void {
    this.currency$ = this.currentService.getAll()
  }

}
