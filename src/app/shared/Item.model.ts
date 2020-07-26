export class Item {
  public name: string;
  public ingredients: string[];
  public price: number;
  public category: string;
  public quantity: number;
  constructor(name: string, ingredients: string[], price: number, category: string, quantity: number = 1) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }
}
