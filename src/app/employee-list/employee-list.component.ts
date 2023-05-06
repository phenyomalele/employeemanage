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
searchText: any;

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

  employeeDetails(employeeId: number){
    this.router.navigate(['employee-details', employeeId]);
  }

  updateEmployee(employeeId: number){
    this.router.navigate(['update-employee', employeeId]);
  }

  deleteEmployee(employeeId: number){
    if(confirm('Are you sure you want to delete the record ?'))
    this.employeeService.deleteEmployee(employeeId).subscribe( data => {
      console.log(data);
      this.getEmployees();
      alert('Record Deleted Successfully !')
    })
   
  }
  
}


