import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ItemsComponent } from './components/items/items.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { EditCategoryComponent } from './components/manage-categories/edit-category/edit-category.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'items', component: ItemsComponent },
      {
        path: 'categories',
        component: ManageCategoriesComponent,
        children: [{ path: 'edit', component: EditCategoryComponent }],
      },
    ],
  },
  { path: 'customers', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
