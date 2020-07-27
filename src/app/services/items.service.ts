import { Item } from '../shared/Item.model';

export class ItemsService {
  private items: Item[] = [
    new Item('Chicken-b', ['grilled chicken', 'tomato', 'lettuce', 'pickles'], 10000, 'burgers'),
    new Item('Tex', ['angus beef', 'tomato', 'jalapenos', 'onions'], 12000, 'burgers'),
    new Item('Mozzarella', ['angus beef', 'tomato', 'jalapenos', 'onions'], 11000, 'burgers'),
    new Item('Portobello', ['angus beef', 'tomato', 'jalapenos', 'onions'], 10000, 'burgers'),
    new Item('Vegan', ['vegan patty', 'tomato', 'jalapenos', 'onions'], 15000, 'burgers'),
    new Item('Chicken d-lite', ['angus beef', 'tomato', 'jalapenos', 'onions'], 14000, 'burgers'),
    new Item('Vegetarian', ['Mushrooms', 'tomato', 'cheese', 'oregano'], 18000, 'pizzas'),
    new Item('Pepperoni', ['Tomato sauce', 'mushrooms', 'cheese', 'pepperoni'], 17000, 'pizzas'),
    new Item('Nutella bomb', ['waffle', 'nutella', 'nuts', 'ice cream'], 11000, 'dessert'),
    new Item('Lazy cake', ['Chocolate', 'Digestive', 'baking powder', 'coconut'], 10000, 'dessert'),
    new Item('Snow Crepe', ['White Chocolate', 'Strawberries', 'Syrup', 'nuts'], 12000, 'dessert'),
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
