import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  customer: Customer;

  constructor(private Cs: CustomersService) { }

  ngOnInit(): void {
    this.customers = this.Cs.getCustomers();
  }

}
