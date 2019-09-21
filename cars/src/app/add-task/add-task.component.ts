import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  data : any[] = [];
  constructor(private send : TaskserviceService ) { }
  sendata(text)
  {
    console.log(text);
    this.data = text;
    this.send.dat = this.data;
    text.reset();
  }

  ngOnInit() {
  }

}
