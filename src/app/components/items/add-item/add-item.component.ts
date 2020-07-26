import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Item } from 'src/app/shared/Item.model';
import { ItemsService } from 'src/app/services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  categories: { id: number; name: string }[];
  items: Item[];
  constructor(
    private cS: CategoriesService,
    private itemsService: ItemsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.cS.getCategories();
    this.items = this.itemsService.getItems();
  }

  addItem(
    ...args: [
      Event,
      HTMLInputElement,
      HTMLInputElement,
      HTMLInputElement,
      HTMLInputElement
    ]
  ) {
    args[0].preventDefault();
    const name = args[1].value;
    const ingredients = args[2].value.split(',');
    const price = args[3].value;
    const category = args[4].value;
    const item = new Item(name, ingredients, +price, category);
    this.items.push(item);
    this.router.navigate(['menu', 'items']);
  }
}
