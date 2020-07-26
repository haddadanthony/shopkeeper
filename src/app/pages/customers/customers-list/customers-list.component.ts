import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/customer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  customers: Customer[];
  customer: Customer;

  constructor(
    private cS: CustomersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.customers = this.cS.getCustomers();
  }

  showCustomer(id: number) {
    this.customer = this.cS.getCustomer(this.customers, id);
    this.router.navigate(['/customers', this.customer.id], {queryParamsHandling: 'preserve'});
  }
}
