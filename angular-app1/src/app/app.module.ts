import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LuckyNumberComponent } from './lucky-number.component';
import { WelcomeComponent } from './welcome.component';
import { SimpleComponent } from './simple/simple.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';


@NgModule({
  declarations: [
    AppComponent,
  HelloComponent,
  WelcomeComponent,
  LuckyNumberComponent,
  SimpleComponent,
  SimpleFormComponent,
  CalculatorComponent,
  LoginComponent,
  RegisterComponent,
  Register2Component
  
 
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
