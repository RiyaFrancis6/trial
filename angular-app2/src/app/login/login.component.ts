import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

public  username:string;
 public  password:string;
 public  msg:string;
  //check:boolean;

//dependency injection- we r req to access the Router API
  constructor(private router:Router) {}


  login()
  {
   if(this.username=='riya' && this.password == '123'){
     //this.check = true;
     sessionStorage.setItem('loggedInUsername',this.username);//temp place to sore data html and js
     this.router.navigate(['dashboard']);
   }
   else{
     this.msg = "Invalid user/password";
   }
  }

}
