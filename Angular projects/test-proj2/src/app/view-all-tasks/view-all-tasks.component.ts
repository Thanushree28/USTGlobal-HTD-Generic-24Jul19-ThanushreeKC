import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-view-all-tasks',
  templateUrl: './view-all-tasks.component.html',
  styleUrls: ['./view-all-tasks.component.css']
})
export class ViewAllTasksComponent implements OnInit {
   arr:any[] = [];
  constructor(private sent : TaskserviceService) { }

  ngOnInit() {

    // this.arr = this.
    console.log(this.arr);
  }

  delete(data){
    let index = this.arr.indexOf(data);
    this.arr.splice(index,1);
    console.log(this.arr);
  }

}
