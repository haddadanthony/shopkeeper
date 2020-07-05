import { Component, OnInit, ElementRef } from '@angular/core';
import { Item } from 'src/app/shared/Item.model';
import { ItemsService } from 'src/app/services/items.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: Item[];
  selected = 'items';

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

  loadCategory() {
    this.selected = 'category';
    this.router.navigate(['categories'], {relativeTo: this.route});
  }

  loadItems() {
    this.selected = 'items';
    this.router.navigate(['items'], {relativeTo: this.route});
  }
}
