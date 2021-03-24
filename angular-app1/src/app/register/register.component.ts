import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
  <form #myForm="ngForm" (ngSubmit) = "register(myForm)">
  <label>Name</label>
  <input type="text" name="t1" required minlength="3" #name ="ngModel" ngModel /> <br />
  <!--<div *ngIf = "name.invalid && (name.dirty || name.touched)">-->
  <div *ngIf = "myForm.submitted && name.invalid"> 
  //show error only after submission
     <div *ngIf = "name.errors.required">Name is required</div>
     <div *ngIf = "name.errors.minlength">Name shd have atleat 3 letters</div>
     </div>

  <label>Email</label>
  <input type="email" name="t2" pattern="^[a-ZA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-z0-9-.]+$" #email ="ngModel" ngModel /> <br />
  <div *ngIf = "email.invalid && (email.dirty || email.touched)">
     <div *ngIf = "email.errors.pattern">Email should be of type john@abc.com</div>     
     </div>

  <label>Password</label>
  <input type="password" name="t3" #password ="ngModel" ngModel/> <br />

  <label>City</label>
  <input type="text" name="t4" #city ="ngModel" ngModel /> <br />


  <label>Pincode</label>
  <input type="number" min="100" max ="1000" name="t5" #pincode ="ngModel" ngModel /> <br />

  <button type ="submit">Register</button>

  </form>
  `,
  styles: [
  ]
})
export class RegisterComponent  {
  
  register(myForm:NgForm)// can be diff name like form also
  {
    //console.log(typeof myForm)
    //console.log(Object.prototype.toString.call(myForm));
        console.log(myForm);
        console.log(myForm.value);
        //to get data from form
  }

}
