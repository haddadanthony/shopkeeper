import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() categoryEl: {id: number, name: string};
  constructor(private route: ActivatedRoute, private ctgService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params.id;
        this.categoryEl = this.ctgService.getCategory(id);
      }
    );
  }

  onEditCategory(e: Event, input: HTMLInputElement) {
    e.preventDefault();
    const id = +this.route.snapshot.params.id;
    this.categoryEl = this.ctgService.getCategory(id);
    this.ctgService.updateCategory(this.categoryEl.id, input.value);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
