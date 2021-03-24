import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
 

  <h2 class ="counter">
  {{counter}}
  </h2>
  
  <button class = "counter-button" (click) = "increment()" >
  Click
  </button>
  ` ,
  
  styles: [`

    .counter-button{
 
      font-size:1 rem;
      padding :5px 10px;
      color:#585858;
  }
 ` ]
})
export class CounterComponent  {

  counter:number = 42;
  increment()
  {
      this.counter++;
  }

}
