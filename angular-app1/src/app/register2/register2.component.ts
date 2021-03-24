import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Address } from 'node:cluster';

//validation checks 
@Component({
  selector: 'app-register2',
  template: `
<form #regForm ="ngForm" (ngSubmit) = "register(regForm)">
<!-- practise validation -->
<div>Enter name :<input type="text" minlength =3 name = "name" #name="ngModel" [(ngModel)]=user.name /> </div>
<div *ngIf = "regForm.submitted && name.invalid"> 
<div class ="c1" *ngIf = "name.errors.required">Name is required</div>
<div class="c1" *ngIf = "name.errors.minlength">Name shd have atleat 3 letters</div>
</div>



<div>Enter email :<input type="email" name = "email" #email="ngModel"[(ngModel)]=user.email /> </div>


<div>Enter password :<input type="password" minlength="8" name="password" #password="ngModel" [(ngModel)]=user.password /> </div>
<div  *ngIf = "regForm.submitted && name.invalid"> 
<div class="c1" *ngIf = "password.errors.required">this is required</div>
     <div class="c1" *ngIf = "password.errors.minlength">password shd have atleat 8 letters</div>
     </div>


<div>Enter city :<input name="city" #city="ngModel" [(ngModel)]=user.address.city/> </div>


<div>Enter pincode :<input required pattern="^[0-9]{6}" name="pincode" #pincode="ngModel" [(ngModel)]=user.address.pincode /> </div>
<div  *ngIf = "regForm.submitted && name.invalid">
<div class ="c1" *ngIf = "pincode.errors.required">this is required</div>
<div class ="c1" *ngIf = "pincode.errors.pattern">Name shd be in format</div>
</div>


<button type = "submit">Register</button>
</form>
 `,
  styles: [
    '.c1{color:red;}'
  ]
})
export class Register2Component  {

 user:User = new User();//form obj to be stored 

register(f:NgForm)
{

  if(f.valid)//is form valid or not if data is valid only then execute the code
  console.log(this.user);

else
alert("Please fix the errors and submit again");
//show the message on page todo
}


}

export class User{
  name:string;
  email:string;
  password:string;
  address:Address = new Address();//initiase the variable otherwisw null or null pointer expression in java

  }
  
  export class Address{
  city:string;
  pincode:number;
}