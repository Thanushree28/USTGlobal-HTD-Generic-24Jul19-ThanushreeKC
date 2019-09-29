
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  // url: string = 'https://avatars0.githubusercontent.com/u/1?v=4';

  
  gitData:any[]=[];
    constructor(private http: HttpClient) { 
    http.get<any>('https://api.github.com/users')
    .subscribe(resData => {
      this.gitData = resData;
      console.log(this.gitData);
     })
  }
  removeUser(user){
    let index=this.gitData.indexOf(user);
    this.gitData.splice(index,1);
    console.log(this.gitData);
  }
}
