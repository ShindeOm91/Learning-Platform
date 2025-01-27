import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {

    this.getemployeeData();
    
  }

  getemployeeData(){
    this.employeeService.getEmployeeList().subscribe(data => {
      console.log(data);
      this.employees = data;
    })
  }

}
