import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carData:any = '';
  cars = [
    {
      brand:'Rolls Royce',
      img:'https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg',
      
    },
    {
      brand:'Porsche',
      img:'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg',
      
    },
    {
      brand:'Ambassador',
      img:'https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800__340.jpg',
      
    },
    {
      brand:'BMW',
      img:'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
      
    },
    {
      brand:'Audi A7',
      img:'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
      
    }
  ]
  constructor() { }
  sendCar(car){
    this.carData =car;

  }

  ngOnInit() {
  }

}
