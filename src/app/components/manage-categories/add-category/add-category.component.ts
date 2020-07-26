import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private ctgService: CategoriesService) { }

  ngOnInit(): void {
  }

  onAddCategory(e: Event, name: HTMLInputElement) {
    e.preventDefault();
    this.ctgService.addCategory(name.value);
    name.value = '';
  }
}
