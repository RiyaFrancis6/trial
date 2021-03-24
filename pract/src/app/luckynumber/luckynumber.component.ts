import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-luckynumber',
  template: `
      <div class = "{{style}}">welcome to vaani.com</div>
  <button (click) = "generate()">Click</button>TO SHOW LUCKY NUMBER
  <h1 *ngIf = "luckyNumber">your lucky number is{{luckyNumber}}</h1>
    ` ,
  styles: [ 
   ' h1{color:red;}',
   '.info1 {font-weight:bold ;font-size:30px;color:green ;}',
   '.info2 {text-shadow :5px 5px 5px red;}'
  ]
})
export class LuckynumberComponent 
 {

  luckyNumber : number;
  style:string = "info1";

  generate()
  {
    this.luckyNumber = Number(Math.ceil(Math.random() *10));
    this.style = "info1 info2" ;
  }
}
