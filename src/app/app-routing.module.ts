import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ItemsComponent } from './components/items/items.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { EditCategoryComponent } from './components/manage-categories/edit-category/edit-category.component';
import { CategoryComponent } from './components/manage-categories/category/category.component';
import { AddCategoryComponent } from './components/manage-categories/add-category/add-category.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './pages/customers/create-customer/create-customer.component';
import { EditCustomerComponent } from './pages/customers/edit-customer/edit-customer.component';
import { CardItemComponent } from './components/items/card-item/card-item.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: 'items',
        component: ItemsComponent,
        children: [
          { path: '', component: CardItemComponent },
          { path: 'add', component: AddItemComponent },
        ],
      },
      {
        path: 'categories',
        component: ManageCategoriesComponent,
        children: [
          { path: 'add', component: AddCategoryComponent },
          { path: ':id/edit', component: EditCategoryComponent },
          { path: ':id', component: CategoryComponent },
        ],
      },
    ],
  },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: '', component: CustomersListComponent },
      { path: 'create', component: CreateCustomerComponent },
      { path: 'edit/:id', component: EditCustomerComponent },
      { path: ':id', component: CustomerComponent },
    ],
  },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
