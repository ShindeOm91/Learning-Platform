import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time = new Date();
  intervalId: any;
  subscription: Subscription;
  home = true;
  title = 'test-app';
  select = false;
  userselect = false;
  addUser = false;
  empList = false;
  afterLogin = false;
  userfName = '';
  userlName = '';
  dashboard = false;
  userId = 0;
  document = false;
  abcd = '';
  mainPage = true;
  masterPage = false;
  addRole = false;
  addLocation = false;
  addQuetion = false;
  constructor(){
   // setTimeout(() =>{
   //  this.title = "Changed Title";
   // },1000);
  }
ngOnInit(): void {
  this.intervalId = setInterval(() => {
    this.time = new Date();
  }, 1000);
}
  todopage(value: any){
    if(value===0){
      this.home = true;
      this.userselect = false;
      this.select = false;
      this.addUser = false;
      this.empList = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = false;
      this.mainPage = true;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    }else if(value === 1){
      this.userselect = true;
      this.select = false;
      this.home = false;
      this.addUser = false;
      this.empList = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = true;
      this.mainPage = false;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    }else if(value === 2) {
      this.select = true;
      this.userselect = false;
      this.home = false;
      this.addUser = false;
      this.empList = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = false;
      this.mainPage = true;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    }else if(value===3){
      this.addUser = true;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.empList = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = true;
      this.mainPage = false;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    }else if(value===4){
      this.empList = true;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = false;
      this.mainPage = true;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    }else if(value===5){
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = false;
      this.mainPage = true;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    } else if(value===6){
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = true;
      this.document = false;
      this.masterPage = false;
      this.mainPage = true;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    }else if(value===7){
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = true;
      this.masterPage = false;
      this.mainPage = true;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    } else if(value===8) {
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = true;
      this.mainPage = false;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = false;
    } else if(value===9) {
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = true;
      this.mainPage = false;
      this.addRole = true;
      this.addLocation = false;
      this.addQuetion = false;
    } else if(value===10) {
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = true;
      this.mainPage = false;
      this.addRole = false;
      this.addLocation = true;
      this.addQuetion = false;
    } else if(value===11) {
      this.empList = false;
      this.addUser = false;
      this.select = false;
      this.userselect = false;
      this.home = false;
      this.afterLogin = true;
      this.dashboard = false;
      this.document = false;
      this.masterPage = true;
      this.mainPage = false;
      this.addRole = false;
      this.addLocation = false;
      this.addQuetion = true;
    }
    this.abcd = 'content';
  }

  userDetails(data: any){
    //console.log(data);
    this.userfName = data.fname;
    this.userlName = data.lname;
    this.userId = data.id;
    sessionStorage.setItem('userfName', this.userfName);
    sessionStorage.setItem('userId', this.userId+'');
    sessionStorage.setItem('upass', data.psw);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
