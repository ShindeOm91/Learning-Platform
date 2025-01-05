import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  selected=false;
  selecteded=false;
  action = 0;
  users: User[];
  loginUserId : any;
  constructor(private userService: UserService) {}

ngOnInit(): void {
  this.userList();
  this.loginUserId = sessionStorage.getItem('userId');
}

userList(){
  this.userService.getUsers().subscribe((data: User[]) => {
    console.log(data)
    this.users = data
  });
}

getAddUser(){
  //alert("Deleted Succefully...!");
}

deleteUser(id : number){
  console.log(id);
  this.userService.deleteUser(id).subscribe(data =>{
    console.log(data);
  this.userList();
  this.getAddUser();
  });
}

updateUser(id : number){
  console.log(id);
}

}
