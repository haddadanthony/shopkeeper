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

  getCustomer(customersList: Customer[], id: number) {
    const customer = customersList.find(c => c.id === id);
    return customer;
  }

  searchCustomer(mobile: string, customers: Customer[], result: Customer[]) {
    customers.forEach((customer) => {
      if (customer.mobile.includes(mobile)) {
        result.push(customer);
      }
    });
  }

  changeStatusToRegular(customer: Customer) {
    customer.isRegular = true;
  }

  addCustomer(customer: Customer, customers: Customer[]) {
    customers.push(customer);
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => customer.id !== id);
  }
}
