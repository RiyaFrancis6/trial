import { Component } from "@angular/core";

@Component({
    selector:'lucky-number',
    template:`
    <div class ="{{style}}">welcome to vaani.com</div>
    <button (click) = "generate()">Click here</button>to show lucky number
    <h1 *ngIf="luckyNumber">your lucky number is {{luckyNumber}}</h1>
    `,
    styles:[
        'h1{color:red}',
        '.info {font-weight:bold;font-size:30px;color:green;}',
        '.info2 {text-shadow:5px 5px 5px red;}']
})

export class LuckyNumberComponent{
        
    luckyNumber : number ;
    style:string ="info";


    generate()
    {
        this.luckyNumber = Number(Math.ceil(Math.random() *10));
        this.style ="info info2";
    }
}