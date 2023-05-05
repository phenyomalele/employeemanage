import { Component , OnInit} from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data)
      this.employees = data;
    });
  }

  employeeDetails(employee_Id: number){
    this.router.navigate(['employee-details', employee_Id]);
  }

  updateEmployee(employee_Id: number){
    this.router.navigate(['update-employee', employee_Id]);
  }

  deleteEmployee(employee_Id: number){
    this.employeeService.deleteEmployee(employee_Id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}


