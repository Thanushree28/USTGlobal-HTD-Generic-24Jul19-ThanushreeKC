import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskData : any[] = [];
  constructor(private task : TaskserviceService ) { }
  add(data)
  {
    console.log(data);
    this.taskData.push(data);
    this.task.t = this.taskData;
    data.reset();
  }

  ngOnInit() {
  }

}
