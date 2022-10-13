import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICurrency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  currency:ICurrency[]

  getAll():Observable<ICurrency[]>{
    return this.http.get<ICurrency[]>("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").pipe(
    )
  }

}
