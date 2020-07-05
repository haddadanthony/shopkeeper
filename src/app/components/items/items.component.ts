import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/Item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }

}
