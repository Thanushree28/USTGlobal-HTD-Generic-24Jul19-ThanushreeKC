import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition=false;
  users = [{
              id:101,
              name:'Thanu',
              city:'Mysore'
           },
          {
              id:102,
              name:'Anu',
              city:'Mandya'
          },
        {
              id:103,
              name:'Manu',
              city:'Pune'
        },
      {
             id:104,
             name:'Nami',
             city:'Tumkur'
      },
    {
         id:105,
         name:'Megha',
         city:'Hassan'
    }]

  constructor() { }
  removeUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.condition=true;
  }
  close(){
 this.condition=false;
  }

  ngOnInit() {
  }

}
