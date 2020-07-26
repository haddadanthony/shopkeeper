import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/customer.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  customers: Customer[];
  oldData: Customer;
  id: number;
  constructor(
    private cS: CustomersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.customers = this.cS.getCustomers();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.oldData = this.cS.getCustomer(this.customers, this.id);
    console.log(this.oldData);
  }

  editCustomer(
    ...args: [Event, HTMLInputElement, HTMLInputElement, HTMLInputElement]
  ) {
    args[0].preventDefault();
    this.oldData.name = args[1].value;
    this.oldData.lastname = args[2].value;
    this.oldData.mobile = args[3].value;
    const oldRecordIndex = this.customers.indexOf(
      this.cS.getCustomer(this.customers, this.id)
    );
    this.customers[oldRecordIndex] = this.oldData;
    this.router.navigate(['/customers']);
  }
}
