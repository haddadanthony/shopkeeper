import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/customer.model';
import { CustomersService } from 'src/app/services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  customers: Customer[];
  constructor(private cS: CustomersService, private router: Router) {}

  ngOnInit(): void {
    this.customers = this.cS.getCustomers();
  }

  addCustomer(
    name: HTMLInputElement,
    lastName: HTMLInputElement,
    mobile: HTMLInputElement,
    e: Event
  ) {
    e.preventDefault();
    const customer = new Customer(name.value, lastName.value, mobile.value);
    name.value = '';
    lastName.value = '';
    mobile.value = '';
    this.customers.push(customer);
    this.router.navigate(['/customers']);
  }
}
