import { Component, OnInit,Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { TreeNode } from 'primeng/api';
import { UserComponent } from '../user/user.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {
  users: User = new User;
  title = 'Add User'
  //selectedCities: string[] = [];
  files!: TreeNode[];
  selectedFiles!: TreeNode<any> | TreeNode<any>[] | null;

  constructor(private userservice : UserService, private appComponent : AppComponent){}
  ngOnInit(): void {
    this.userservice.getFiles().then((data) => (this.files = data));
  }

  saveUser(){
    this.userservice.createUsers(this.users).subscribe( data => {
      console.log(data);
      alert("User Added Successfully....!")
      this.appComponent.todopage(1);
    },
    error => console.log(error));
  }

  select(events:any){
    alert(events[0].label);
  }

  cancelAdd() {
		//window.location.reload();
    //this.userComponent.userList();
    this.appComponent.todopage(1);
	}
}
