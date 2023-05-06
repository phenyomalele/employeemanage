import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.onSubmit();
   this.employeeId = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
      console.log(this.employeeId)
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeId = this.route.snapshot.params['id'];
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe((data:any) =>{
      this.router.navigate(['/employees']);


    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
