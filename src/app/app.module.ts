import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from '../app/components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardItemComponent } from './components/items/card-item/card-item.component';
import {ItemsService} from './services/items.service';
import { ItemsComponent } from './components/items/items.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { CategoriesService } from './services/categories.service';
import { EditCategoryComponent } from './components/manage-categories/edit-category/edit-category.component';
import { CategoryComponent } from './components/manage-categories/category/category.component';
import { AddCategoryComponent } from './components/manage-categories/add-category/add-category.component';
import { CustomersService } from './services/customers.service';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersListComponent } from './pages/customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './pages/customers/create-customer/create-customer.component';
import { EditCustomerComponent } from './pages/customers/edit-customer/edit-customer.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    MenuComponent,
    CustomersComponent,
    OrdersComponent,
    ProfileComponent,
    SidebarComponent,
    CardItemComponent,
    ItemsComponent,
    ManageCategoriesComponent,
    EditCategoryComponent,
    CategoryComponent,
    AddCategoryComponent,
    CustomerComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule
  ],
  providers: [ItemsService, CategoriesService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
