import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-view-all-tasks',
  templateUrl: './view-all-tasks.component.html',
  styleUrls: ['./view-all-tasks.component.css']
})
export class ViewAllTasksComponent implements OnInit {
   arr:any[] = [];
   i: any[]=[];
  constructor(private sent : TaskserviceService) { }

  ngOnInit() {

    this.arr = this.sent.dat;
    console.log(this.arr);
  }

  delete(i){
    this.arr.splice(i,1);
  }

}
