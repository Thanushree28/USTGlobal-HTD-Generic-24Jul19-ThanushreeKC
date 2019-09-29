import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  ngOnit(): void{
    console.log('ngOnit implemented')
  }
  backgroundColor ='red';
  constructor() {
    console.log('constructor is running')
   }

  buttonEvent(data){
    console.log(data)
    // alert("hello");
  }
  changecolor(data){
    // if(this.backgroundColor=="red"){
    //   this.backgroundColor='blue';
    // }else{
    //   this.backgroundColor='red';
    // }
    this.backgroundColor = data;
  }

  ngOnInit() {
  }

}
