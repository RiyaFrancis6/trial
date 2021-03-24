import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit) = "login()">
    Enter username :<input type="text" name ="t1" [(ngModel)]=username /> <br />
    Enter password:<input type="password" name ="t2" [(ngModel)]=password /> <br />
    <button type ="submit">Login</button>
    </form>

   <p *ngIf = "msg">{{msg}}</p>
         `,
  styles: [
  ]
})
export class LoginComponent  {

  username:string;
  password:string;
  msg:string;
  //check:boolean;

  login()
  {
   if(this.username=='riya' && this.password == '123'){
     //this.check = true;
     this. msg = "Welcome"+" "+this.username;
   }
   else{
     this.msg = "Invalid user";
   }
  }
 
}
