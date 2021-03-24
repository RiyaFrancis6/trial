import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
  <form (ngSubmit) = "doSomething()">
  Enter 1 number:<input type="number" name ="t1" [(ngModel)]=no1 /> <br />
 Enter 2 number :<input type="number" name ="t2" [(ngModel)]=no2 /> <br />
  <button type="submit">+</button>
  <button type="submit">-</button>
    </form>

  <div *ngIf="no1 && no2"> 
 sum of {{no1}} and {{no2}} is {{no1+no2}}
 difference of {{no1}} and {{no2}} is {{no1-no2}}
    </div>

  `,
  styles: [
  ]
})
export class CalculatorComponent  {

  no1: number;
  no2: number;
  
  doSomething() {
    alert(this.no1+this.no2);
    alert(this.no1-this.no2);

  
 

  }

}
