import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() itemEl: {name: string, ingredients: string[]};
  constructor() { }

  ngOnInit(): void {
  }

}
