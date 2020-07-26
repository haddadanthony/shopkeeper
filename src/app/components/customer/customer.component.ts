import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  id: any;

  constructor(private cS: CustomersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.customer = this.cS.getCustomer(this.cS.getCustomers(), this.id);
  }

  changeToRegular(e: Event) {
    e.preventDefault();
    this.cS.changeStatusToRegular(this.customer);
  }

  loadEdit(e: Event) {
    e.preventDefault();
    this.router.navigate(['customers', 'edit', this.customer.id], {queryParamsHandling: 'preserve'});
  }

  deleteCustomer(e: Event) {
    e.preventDefault();
    this.cS.deleteCustomer(this.id);
    this.router.navigate(['customers']);
  }

}
