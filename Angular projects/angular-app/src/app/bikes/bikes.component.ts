import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikeData: any = '';

bikes = [
  {
    brand:'KTM',
    img:'https://cdn.pixabay.com/photo/2015/05/20/07/57/grassland-774929__340.jpg',
    description:'This is KTM bike.KTM is among the renowned bike manufacturers in the world and have it’s headquarter based in Austria. KTM are renowned for their off-road, endure and street bikes. The slogan for KTM is “Ready to Race” and this character is reflected well in its range of motorcycles. The Austrian bike maker made their foray into the Indian market with the help of Bajaj Auto which currently hold the majority stake. By joining hands with the Chakan based two-wheeler giant, KTM was able to reap the benefits of frugal engineering that Bajaj brought along.The first motorcycle to be launched by the Austria based bikemaker in India was the 200 Duke street bike.'
  },
  {
    brand:'Bugatti',
    img:'https://cdn.pixabay.com/photo/2016/12/20/22/47/harley-1921700__340.jpg',
    description:'This is Bugati bike.As part of your research on purchasing a vehicle from Ducati, it is a good practice to compare the price and technical specifications of the model of your choice with rival brand products. We also encourage you to view our photos of the various offerings made by Ducati.'
  },
  {
    brand:'Rx100',
    img:'https://cdn.pixabay.com/photo/2016/03/09/09/31/scooter-1245844__340.jpg',
    description:'This is Rx100 bike'
  },
  {
    brand:'Royal Enfield',
    img:'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg',
    description:'This is royal enfield bike'
  },
  {
    brand:'Pulsor 220',
    img:'https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962__340.jpg',
    description:'This is pulsor220 bike'
  }
]
  constructor() { }
  sendBike(bike){
    this.bikeData =bike;

  }
   
  ngOnInit() {
  }

}
