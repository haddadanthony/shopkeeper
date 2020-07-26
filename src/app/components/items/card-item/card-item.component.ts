import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item } from 'src/app/shared/Item.model';
import { ItemsService } from 'src/app/services/items.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent implements OnInit {
  items: Item[];
  filteredItems: Item[];
  @ViewChild('category') category: ElementRef;
  categories: { id: number; name: string }[];
  constructor(
    private itemsService: ItemsService,
    private cS: CategoriesService
  ) {}

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
    this.categories = this.cS.getCategories();
    this.filteredItems = this.items;
  }

  filterItems() {
    this.filteredItems = this.items.filter(
      (item) => item.category === this.category.nativeElement.value
    );
  }
}
