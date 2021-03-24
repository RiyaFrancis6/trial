import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  template: `
    
<form (ngSubmit) = "doSomething()">
Enter  your name :<input type = "text" name ="t1 " [(ngModel)] = name/> <br />
Enter  your birthday :<input type = "date" name ="t2" [(ngModel)] = dob/> <br />
<button type = "submit">Submit</button>
        </form>

<div *ngIf = "name  && dob ">
Hello {{name}} you were born on {{dob}}
</div>
  `,
  styles: [
  ]
})
export class SimpleformComponent {

  name:string;
  dob: string;


  doSomething()
  {//alert(this.name + " "+ this.dob);
this.name = this.name.toUpperCase();
  }}
