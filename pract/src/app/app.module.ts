import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LikebuttonComponent } from './likebutton/likebutton.component';
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { LoginComponent } from './login/login.component';
import { CalComponent } from './cal/cal.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LikebuttonComponent,
    LuckynumberComponent,
    SimpleformComponent,
    LoginComponent,
    CalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
