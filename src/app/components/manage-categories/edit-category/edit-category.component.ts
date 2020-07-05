import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  @Input() categoryEl: {id: number, name: string};
  constructor() { }

  ngOnInit(): void {
  }

}
