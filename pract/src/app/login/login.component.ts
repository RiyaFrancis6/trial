import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
<form (ngSubmit) ="login()">
enter username: <input type ="text" name ="t1" [(ngModel)] = username /> <br />
enter password: <input type ="password" name ="t2" [(ngModel)] = password /> <br />
<button type = "submit">LOGIN </button>
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


 login()
 {
   if(this.username === "Riya" && this.password == "123")
   {
this.msg = "Welcome" + " " + this.username;
    
   }

   else{
     this.msg = "invalid user";
   }
 }

}
