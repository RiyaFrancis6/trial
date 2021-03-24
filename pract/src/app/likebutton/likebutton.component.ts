import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  template: `
    
  <h2>
  <button class ="like-button" 
   [ngClass] = 
   "{ 
     'liked': getLiked()
     }"
(click) = "likeCounter()"> 
Like|
<span class = "likes-counter">
{{initialCount}}
</span>
</button>
</h2>
  `,
  styles: [`
  .like-button {
    font-size :1 rem;
    padding :5px 10px;
    color: #585858;
  }
  
  .liked
  {
font-weight:bold;
color:#1565c0;
  }
 `]
})

export class LikebuttonComponent  {

 public initialCount =100;
 liked:boolean=false;

 likeCounter()
 {
   if(!this.liked)
   {
     this.initialCount++;
     this.liked=true;
   }


   else
   {
     this.initialCount--;
     this.liked=false;
   } }


getLiked()
{
  return this.liked;

}

}

