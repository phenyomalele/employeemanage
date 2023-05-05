import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL ="http://localhost:8080/employee";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(employeeId: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${employeeId}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${employeeId}`);
  }
}
