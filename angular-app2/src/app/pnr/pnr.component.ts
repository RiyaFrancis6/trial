import { Component, OnInit } from '@angular/core';
import {​​ HttpClient }​​ from '@angular/common/http';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent  {

 

  constructor(private http: HttpClient) { }

  
  pnrNo:number;
  msg:any;

  process1()
  {
     //<!---let url ="http://api.openweathermap.org/data/2.5/weather?q=" +this.city+"&appid=138b91f7502c917df454a94449df5c18";-->
      
    let url = "http://localhost:8181/rest-app/api/pnr?pnrNo="+this.pnrNo;
    this.http.get(url).subscribe(data=>{
      this.msg =data;

    })      
     
     
  
  }

 


}
