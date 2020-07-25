import { Customer } from '../shared/customer.model';

export class CustomersService {
  private customers = [
    new Customer('Anthony', 'Haddad', '81717138'),
    new Customer('Edwin', 'Haddad', '89797238'),
    new Customer('Andrew', 'Haddad', '71707161'),
    new Customer('John', 'Doe', '881717138'),
  ];

  getCustomers() {
    return this.customers;
  }

  searchCustomer(mobile: string, customers: Customer[], result: Customer[]) {
    customers.forEach((customer) => {
      if (customer.mobile.includes(mobile)) {
        result.push(customer);
      }
    });
  }
}
