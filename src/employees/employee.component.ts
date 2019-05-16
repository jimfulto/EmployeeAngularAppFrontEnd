import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeesService } from 'src/services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  records: Employee[];
  load: boolean;

  constructor(private service: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {
    this.service.getAllEmployees().subscribe(data => this.records = data);
  }

  
}
