import { Item } from '../shared/Item.model';

export class ItemsService {
  private items: Item[] = [
    new Item('Chicken-b', ['grilled chicken', 'tomato', 'lettuce', 'pickles'], 10000, 'burgers'),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000, 'burgers'),
    new Item('Mozzarella', ['angus beef', 'tomato', 'jalapenos', 'onions'], 11000, 'burgers'),
    new Item('Portobello', ['angus beef', 'tomato', 'jalapenos', 'onions'], 10000, 'burgers'),
    new Item('Vegan', ['vegan patty', 'tomato', 'jalapenos', 'onions'], 15000, 'burgers'),
    new Item('Chicken d-lite', ['angus beef', 'tomato', 'jalapenos', 'onions'], 14000, 'burgers'),
  ];

  getItems() {
    return this.items;
  }

  addToCart(cart: Item[], item: Item) {
    if (cart.includes(item)) {
      cart[cart.indexOf(item)].quantity++;
      return;
    }
    cart.push(item);
  }

}
