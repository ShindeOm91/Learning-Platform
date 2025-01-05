import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.css']
})
export class RoleMasterComponent implements OnInit {
  constructor(private userService: UserService, private snackBar: MatSnackBar) {}
  roles: Role[] = [];

  // Role form model
  newRole: Role = {
    id:0,
    role_name: '',
    role_alias: ''
  };

  ngOnInit(): void {
    this.roleList();
  }

  roleList(){
    this.userService.getRoles().subscribe((data: Role[]) => {
      console.log(data)
      this.roles = data
    });
  }

  // Function to add role to the list
  addRole() {
    if (this.newRole.role_name && this.newRole.role_alias) {
      // this.roles.push({ ...this.newRole });
      // Reset form
      // this.newRole = { roleName: '', roleAlias: '' };

      this.userService.addRole(this.newRole).subscribe( data => {
        console.log(data);
        this.newRole = {id:0 ,role_name: '', role_alias: '' };
        this.snackBar.open('Role created successfully!', 'Close', {
          duration: 3000,
        });
        this.roleList();
      },
      error => console.log(error));

    } else {
      alert('Please enter both Role Name and Role Alias');
    }
  }

  // Function to remove role from the list
  removeRole(id: number) {
    // this.roles.splice(index, 1);
    this.userService.deleteRole(id).subscribe(data =>{
      console.log(data);
      this.snackBar.open('Role created successfully!', 'Close', {
        duration: 3000,
      });
    this.roleList();
    });
  }

  editRole(id : number) {
    this.userService.editRole(id).subscribe(data =>{
      console.log(data);
      this.newRole = data;
    });
  }
}

export interface Role {
  id:number;
  role_name: string;
  role_alias: string;
}
