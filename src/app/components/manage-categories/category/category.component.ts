import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  // categories: { id: number; name: string }[];
  category: { id: number; name: string };
  constructor(
    private ctgService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.category = this.ctgService.getCategory(+params.id);
    });
  }

  loadEditCategory() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  deleteCategory() {
    console.log(this.category.id);
    this.ctgService.deleteCategory(this.category.id);
    this.router.navigate(['menu', 'categories']);
  }
}
