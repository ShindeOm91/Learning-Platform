import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  luname : any;
  lpsw: any;
  hide : boolean = true;
  modal = document.getElementById('id01');
  modal2 = document.getElementById('id02');
  registrationPage = false;
  loginPage = false;
  loginData = [];
  checkDupl : any;
  user: UserLogin = new UserLogin();
  constructor(private userservice : UserService, private app: AppComponent){}

  ngOnInit(): void {
   
  }
  hideShow() {
    this.hide = !this.hide;
  }

  save(){

      /* this.userservice.getUsersDetails(this.user.uname).subscribe( data => {
        if(data){
          console.log(data)
          this.checkDupl = data;
        }
      }); */

    if(this.checkDupl){
        this.user.uname = '';
        this.user.psw = '';
        alert('UserName already register please check your Username');
    } else{
      console.log(this.user);
      this.userservice.createUser(this.user).subscribe( data => {
        console.log(data);
        alert('Dear '+this.user.fname +' '+this.user.lname + ', Your Registration is completed..!')
      },
      error => console.log(error));
      this.registrationPage = false;
    }
  }

  registrationPopup(flag: any){
    this.user.fname = '';
    this.user.lname = '';
    this.user.emailId = '';
    this.user.uname = '';
    this.user.psw = '';
    if(flag === 1){
      this.registrationPage = true;
    }else if(flag === 2){
      this.registrationPage = false;
    }
  }

  loginpopup(flag: any){
    this.luname = '';
    this.lpsw = '';
    if(flag===1){
      this.loginPage = true;
    } else if(flag === 2){
      this.loginPage = false;
    }
  }

  login(){
    this.userservice.loginUser(this.luname,this.lpsw).subscribe( data => {
      console.log('Data : '+data);
      if(data){
        this.app.todopage(6);
        this.app.userDetails(data);
        //this.dash.userDetails(data);
      }else{
        this.loginPage = false;
      }
    })
  }

  checkDuplicate(event: any){
    alert(event);
  }
  sendMail() {
    this.userservice.mailSend("oshinde91199@gmail.com").subscribe(data =>{
      console.log(data);
    });
  }
}

export class UserLogin{
  id: string;
  fname: string;
  lname: string;
  emailId: string;
  uname: string;
  psw: string;
}
