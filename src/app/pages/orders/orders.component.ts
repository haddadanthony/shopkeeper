import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Item } from 'src/app/shared/Item.model';
import { ItemsService } from 'src/app/services/items.service';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  categories: {id: number, name: string}[];
  categoryName: string;
  total = 0;
  items: Item[];
  cart: Item[] = [];
  customer = '';
  customers: Customer[];
  searchCustomerResult: Customer[] = [];

  constructor(private cS: CategoriesService, private itemsService: ItemsService, private customersService: CustomersService) { }

  ngOnInit(): void {
    this.categories = this.cS.getCategories();
    this.items = this.itemsService.getItems();
    this.customers = this.customersService.getCustomers();
  }

  onLoadCategory(e: Event, name: string) {
    e.preventDefault();
    this.categoryName = name;
    console.log(this.categoryName);
  }

  onAddToCart(item: Item) {
    this.itemsService.addToCart(this.cart, item);
    this.calculateTotal(item);
  }

  calculateTotal(item: Item) {
    this.total += item.price;
  }

  onSearchCustomer(mobile: HTMLInputElement) {
    this.customersService.searchCustomer(mobile.value, this.customers, this.searchCustomerResult);
    console.log(this.searchCustomerResult);
    console.log(this.customers);
  }

}
