import { Component ,  OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';
import {  FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
registerForm! : FormGroup
  firstName = new FormControl('');
  submitted = false

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router:  Router , private formBuilder :FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName:  ['',[Validators.required,Validators.minLength(3)]],
      email:  ['',[Validators.required,Validators.email]],
      contact:  ['',[Validators.required,Validators.minLength(10)]],
      department:  ['',Validators.required]
      
    })
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.submitted =true
    if(this.registerForm.invalid){
      return
    }
    
    console.log(this.employee);
    this.saveEmployee();
    alert("success")
    alert('RECORD SUCCESSFULLY SUBMITTED !')
  }
}
