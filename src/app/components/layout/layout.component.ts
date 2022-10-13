import { Component, Input, OnInit } from '@angular/core';
import { ICurrency } from '../../models/currency';
import { CurrencyService } from '../../services/currency.service';
import { rounded } from 'src/app/utils/functions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isOpen = false

  leftCurType = "AUD"
  leftValue:number
  rightCurType = "AUD"
  rightValue:number

  currency: ICurrency[] = [{
  r030: 0,
  txt: "string",
  rate: 1,
  cc: "UAH",
  exchangedate: "string"
}]

  onOpenHandler = ()=>{ this.isOpen = !this.isOpen }

  handleChangeLeftValue(){
    const leftCurRate =  this.currency.filter(obj=>obj.cc===this.leftCurType)[0].rate
    const rightCurRate = this.currency.filter(obj=>obj.cc===this.rightCurType)[0].rate
    this.rightValue = rounded(this.leftValue * (leftCurRate / rightCurRate))
  }

  handleChangeRightValue(){
    const leftCurRate =  this.currency.filter(obj=>obj.cc===this.leftCurType)[0].rate
    const rightCurRate = this.currency.filter(obj=>obj.cc===this.rightCurType)[0].rate
    this.leftValue = rounded(this.rightValue * (rightCurRate / leftCurRate))
  }

  constructor(private currentService: CurrencyService) {}

  ngOnInit(): void {
      this.currentService.getAll().subscribe((cur)=>this.currency = this.currency.concat(cur)
    )
  }

}
