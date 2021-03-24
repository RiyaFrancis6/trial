import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
   <form (ngSubmit) = "doSomething()">
   Enter your name :<input type="text" name ="t1" [(ngModel)]=name /> <br />
  Enter your birthday :<input type="date" name ="t2" [(ngModel)]=dob /> <br />
   <button type ="submit">Submit</button>
   </form>

<div *ngIf="name && dob"> 
   Hello {{name}} u are troubling me since {{dob}}
   </div>

  `,
  styles: [
  ]
})
export class SimpleFormComponent {

  name: string;
  dob :string;
  //check:boolean;
  //we want whatever the user enters in the textfield above to be stored here

 doSomething() {
      //alert(this.name+" "+this.dob);
     // this.check =true;
     this.name = this.name.toUpperCase();

 }

}
