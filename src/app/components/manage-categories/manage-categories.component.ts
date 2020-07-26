import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css'],
})
export class ManageCategoriesComponent implements OnInit {
  categories: { id: number; name: string }[];
  category: { id: number; name: string };
  constructor(
    private ctgService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories = this.ctgService.getCategories();
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      () => (this.categories = this.ctgService.getCategories())
    );
  }

  loadCategory(id: number) {
    this.category = this.ctgService.getCategory(id);
    this.router.navigate(['category', this.category.id], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
