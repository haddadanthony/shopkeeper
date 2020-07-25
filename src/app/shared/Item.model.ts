export class Item {
  public name: string;
  public ingredients: string[];
  public price: number;
  public category: string;
  constructor(name: string, ingredients: string[], price: number, category: string) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
    this.category = category;
  }
}
