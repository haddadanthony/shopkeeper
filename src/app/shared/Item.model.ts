export class Item {
  public name: string;
  public ingredients: string[];
  public price: number;
  constructor(name: string, ingredients: string[], price: number) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
}
