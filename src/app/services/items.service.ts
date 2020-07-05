import { Item } from '../shared/Item.model';

export class ItemsService {
  private items: Item[] = [
    new Item('Chicken-b', ['grilled chicken', 'tomato', 'lettuce', 'pickles']),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions']),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions']),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions']),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions']),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions']),
  ];

  getItems() {
    return this.items;
  }

}
