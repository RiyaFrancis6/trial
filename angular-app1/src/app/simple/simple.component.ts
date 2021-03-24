import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p >
      simple works yea i did it cool!
    </p>
  `,
  styles: [ 
    'p{color:red}'
  ]
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
