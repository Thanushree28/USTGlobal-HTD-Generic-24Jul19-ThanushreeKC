import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

    gitData:any[]=[];
    constructor(private http: HttpClient) { 
    http.get<any>('https://api.github.com/users')
    .subscribe(resData => {
    this.gitData = resData;
      console.log(this.gitData);
     })
  }removeUser(user){
    let index=this.gitData.indexOf(user);
    this.gitData.splice(index,1);
    console.log(this.gitData);
  }

  ngOnInit() {
  }

}
