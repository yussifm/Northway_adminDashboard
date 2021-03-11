import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustom } from './customer.interface';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customData: CustomerService) { }
  user: Icustom;


  ngOnInit() {


  }

}
