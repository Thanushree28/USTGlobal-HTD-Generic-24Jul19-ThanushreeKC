import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskData = [];
  constructor(){ }
  addTask(loginForm)
  {
    console.log(loginForm.value);
    this.taskData.push(loginForm.value);
    loginForm.reset();
    console.log(this.taskData);
  }


  ngOnInit() {
  }
  deleteTask(tasks){
    let index=this.taskData.indexOf(tasks);
    this.taskData.splice(index,1)
  }

}
