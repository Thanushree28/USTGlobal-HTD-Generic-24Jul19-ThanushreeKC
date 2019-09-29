import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  redcolor = true;
   name = 'Thanu';
   imgURL = 'https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751__340.jpg';
  textclasses ='bg-success text-white';
  paragraphStyle = true;
  padding = '50px';
  columspan = 2;
   constructor() {
     setTimeout(()=>{
       this.redcolor = false;
       this.paragraphStyle = false;
     },5000)
    }

}
