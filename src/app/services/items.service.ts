import { Item } from '../shared/Item.model';

export class ItemsService {
  private items: Item[] = [
    new Item('Chicken-b', ['grilled chicken', 'tomato', 'lettuce', 'pickles'], 10000),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000),
  ];

  getItems() {
    return this.items;
  }

}
