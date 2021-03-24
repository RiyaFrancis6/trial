import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username :string;

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loggedInUsername');//get

  }

}
