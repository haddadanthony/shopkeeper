export class CategoriesService {
  private categories: { id: number; name: string }[] = [
    { id: 1, name: 'burgers' },
    { id: 2, name: 'pizzas' },
    { id: 3, name: 'salads' },
    { id: 4, name: 'drinks' },
    { id: 5, name: 'dessert' },
  ];

  getCategories() {
    return this.categories;
  }

  getCategory(id: number): { id: number; name: string } {
    const category = this.categories.find((cat) => cat.id === id);
    return category;
  }

  updateCategory(id: number, name: string) {
    const category = this.getCategory(id);
    category.name = name;
  }

  addCategory(name: string) {
    const category = {
      id: Math.random(),
      name: name
    }
    this.categories.push(category);
  }
}
